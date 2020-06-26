import React, { Component } from 'react'
import './App.css';
import Main from './components/Main'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        twitchDetails: null,
        options: {
          history: true,
          trivia: true,
          slots: true,
          atRobotApe: true,
          awardPoints: true,
          recordChat: true,
          secretWord: true,
          spamMessage: true
        }
      }
    };
  }
  

  switchHandler = (event) => {
    // console.log(event.target.checked, "target value")
    this.setState({
      userInfo: {
        options: {
          [event.target.name]: event.target.checked
        }
      }
    })
  } 
  
  componentDidMount() {
    let code = window.location.search.split('&')[0].split('=')[1]
    window.history.replaceState({ id: 'dashboard' }, 'Dashboard', 'http://localhost:3002')
  
    var options = null
  
    fetch(`http://localhost:3001/useroptions?${code ? 'code=' + code : ''}`, {
      // mode: 'no-cors',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        options = data.options
        this.setState({
          options: data.options
        })
      })
  
  
  
 this.updateOptions = async () => {
    options.history = true
    console.log(options, "options line 28")
    fetch('http://localhost:3001/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(options),
      credentials: 'include',
    })
  }

}

  render() {
    console.log(this.state.userInfo)
    return (
      <div>
      {this.state.userInfo ?
      //  <button onClick={this.updateOptions}>update</button>
       <Main data={this.state} switchHandler={this.switchHandler} />
       : null
      }
     
      </div>
    )
  }
}
