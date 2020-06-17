import React from 'react';
import './App.css';
import Main from './components/Main'

function App() {

  let code = window.location.search.split('&')[0].split('=')[1]


  if (code) {
    fetch(`http://192.168.1.117:3001/useroptions?code=${code}`, {
      // mode: 'no-cors',
      credentials: 'include'
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .then(console.log(document.cookie, 'cookies'))
  } else {
    console.log('no code was present in the window')
  }



  return (
    <div className="App">
      <h1>welcome</h1>
      <Main />
    </div>
  );
}

export default App;
