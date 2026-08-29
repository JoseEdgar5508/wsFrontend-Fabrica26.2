import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [arrPosts, setArrPosts] = useState([])
  const [busca, setBusca] = useState('')

  useEffect(() => {
    const requisicaoAPI = async () => {
      const respostaAPI = await axios.get(
        'https://overfast-api.tekrop.fr/heroes'
      )

      setArrPosts(respostaAPI.data)
    }

    requisicaoAPI()
  }, [])

  const heroisFiltrados = arrPosts.filter((hero) =>
    hero.name.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <>
      <h1>Heróis</h1>

      <input
        type="text"
        placeholder="Buscar herói..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <ul>
        {heroisFiltrados.map((hero) => (
          <li key={hero.key}>
            <img src={hero.portrait} alt={hero.name} />

            <h3 className="text-red-500 text-2xl font-bold">
              {hero.name}
            </h3>

            <p>{hero.role}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App