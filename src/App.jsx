import { useState } from 'react'
import './App.css'


const articles = [
  'php',
  'javascript',
  'laravel',
  'react',
];

function App() {


  const [title, setTitle] = useState(' React Blog Form')
  const [newArticle, setNewArticle] = useState('');



  function addArticle(e) {
    e.preventDefault()
    console.log(articles);



  }

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


        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInputDisabled" placeholder="name@example.com" disabled></input>
          <label for="floatingInputDisabled">Email address</label>
        </div>

      </div>

    </>
  )
}

export default App
