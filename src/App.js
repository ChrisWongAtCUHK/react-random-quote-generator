import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [quote, setQuote] = useState({})
  function getRandomQuote() {
    axios.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded'
    axios
      .post(
        'api/1.0/?method=getQuote&format=json&lang=en'
      )
      .then((response) => {
        setQuote(() => response.data)
      })
  }
  return (
    <div className='quote-generator'>
      <h1 className='app-title'>Random Quote Generator</h1>
      <blockquote className='quote-container'>
        <p>{quote.quoteText}</p>
        <cite>{quote.quoteAuthor}</cite>
      </blockquote>

      <button onClick={getRandomQuote} className='quote-button'>
        Get Random Quote
      </button>
    </div>
  )
}

export default App
