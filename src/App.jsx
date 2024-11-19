import { useState } from 'react'
import './App.css'


const articles = [
  'php',
  'javascript',
  'laravel',
  'react',
];

function App() {


  function addArticle(e) {
    e.preventDefault()
    console.log(articles);

  }




  const [title, setTitle] = useState(' React Blog Form')

  function handleTitleChange(e) {
    console.log(e);
    setTitle(e.target.value)

  }

  function handleButtonOnClick() {
    console.log('mostrare gli articoli');


  }

  return (
    <>
      <div className="container">
        <h1> React Blog Form</h1>
        <p>insert the title</p>
        <input type="text" title='title' id='title' value={title} onChange={e => setTitle(e.target.value)} />
        <button onClick={handleButtonOnClick}>send</button>

        <ul className="list-group">
          {articles.map((article, index) => <li key={index} className="list-group-item">{article}</li>)}


        </ul>
      </div>

    </>
  )
}

export default App
