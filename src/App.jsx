import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import SearchInput from './components/SearchInput'
import HeroList from './components/HeroList'
import Pagination from './components/Pagination'
import HeroSection from './components/HeroSection'


function App() {

  const [arrPosts, setArrPosts] = useState([])

  const [busca, setBusca] = useState("")

  const [paginaAtual, setPaginaAtual] = useState(1)



  useEffect(() => {
    const requisicaoAPI = async () => {
      const respostaAPI = await axios.get(
        "https://overfast-api.tekrop.fr/heroes"
      )

      setArrPosts(respostaAPI.data)

    }

    requisicaoAPI()
  }, [])

  useEffect(() => {
    setPaginaAtual(1)
  }, [busca])

  const heroisFiltrados = arrPosts.filter((hero) =>
    hero.name.toLowerCase().includes(busca.toLowerCase())
  )

  const itensPorPagina = 6

  const indiceFinal = paginaAtual * itensPorPagina
  const indiceInicial = indiceFinal - itensPorPagina
  const heroisDaPagina = heroisFiltrados.slice(indiceInicial, indiceFinal)

  const totalPaginas = Math.ceil(heroisFiltrados.length / itensPorPagina)

  return (
    <div className="min-h-screen bg-blue-800 text-white px-4 py-8">
      <HeroSection />
      <SearchInput busca={busca} setBusca={setBusca} />
      <HeroList herois={heroisDaPagina} />
      <Pagination
        paginaAtual={paginaAtual}
        totalPaginas={totalPaginas}
        setPaginaAtual={setPaginaAtual}
      />

      <footer className="mt-12 text-center text-slate-300 text-sm border-t border-slate-600 pt-6">
        <p>Projeto Final — wsFrontend-Fabrica26.2</p>
        <p>
          Dados fornecidos pela{' '}

          <a href="https://overfast-api.tekrop.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            OverFast API
          </a>
        </p>
      </footer>
    </div>
  )

}

export default App
