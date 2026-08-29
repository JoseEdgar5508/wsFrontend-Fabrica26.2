import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import SearchInput from './components/SearchInput'
import HeroList from './components/HeroList'
import Pagination from './components/Pagination'


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
    <>
      <SearchInput busca={busca} setBusca={setBusca} />
      <HeroList herois={heroisDaPagina} />
      <Pagination
        paginaAtual={paginaAtual}
        totalPaginas={totalPaginas}
        setPaginaAtual={setPaginaAtual}
      />
    </>
  )

}

export default App
