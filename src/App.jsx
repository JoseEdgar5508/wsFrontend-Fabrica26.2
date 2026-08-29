import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [arrPosts, setArrPosts] = useState([])

  useEffect(() => {
    const requisicaoAPI = async () => {
      const respostaAPI = await axios.get(
        'https://overfast-api.tekrop.fr/heroes'
      )

      setArrPosts(respostaAPI.data)
    }

    requisicaoAPI()
  }, [])

  return (
    <>
      <h1>Heróis</h1>
    </>
  )
}

export default App