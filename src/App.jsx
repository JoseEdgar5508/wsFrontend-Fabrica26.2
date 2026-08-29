import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

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
      <input
        type="text"
        placeholder="Buscar herói..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <ul>
        {heroisDaPagina.map((hero) => (
          <li key={hero.key}>
            <img src={hero.portrait} alt={hero.name} />
            <h3 className="text-red-500 text-2xl font-bold">{hero.name}</h3>
            <p>{hero.role}</p>
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => setPaginaAtual(paginaAtual - 1)}
          disabled={paginaAtual === 1}
        >
          Anterior
        </button>

        <span> Página {paginaAtual} de {totalPaginas} </span>

        <button
          onClick={() => setPaginaAtual(paginaAtual + 1)}
          disabled={paginaAtual === totalPaginas}
        >
          Próxima
        </button>
      </div>
    </>
  )

}

export default App
