import React, { Component } from 'react'
import './App.css';
import Main from './components/Main'

export default class App extends Component {

  
  componentDidMount() {
    let code = window.location.search.split('&')[0].split('=')[1]
    window.history.replaceState({ id: 'dashboard' }, 'Dashboard', 'http://localhost:3002')
  
    var options = null
  
    fetch(`http://localhost:3001/useroptions?${code ? 'code=' + code : ''}`, {
      // mode: 'no-cors',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => options = data.options)
  
  }
  
  updateOptions = async () => {
    options.history = true
    console.log(options)
    fetch('http://localhost:3001/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(options),
      credentials: 'include',
    })
  }

  render() {
    return (
      <div>
        <h1>welcome</h1>
      <button onClick={updateOptions}>update</button>
      <Main />
      </div>
    )
  }
}
