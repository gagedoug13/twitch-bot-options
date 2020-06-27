import React, { Component } from 'react'
import './App.css';
import Main from './components/Main'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        twitchDetails: null,
        initialOptions: null,
        currentOptions: null
    };
  }
  
  saveChanges = async(event) => {
    const response = await fetch('http://localhost:3001/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.currentOptions),
      credentials: 'include',
    })
    const data = await response.json()
    if (data.updated) {
      this.setState({
        initialOptions: this.state.currentOptions
      })
    }
  }

  areIdenticalObjects = () => {
    return Object.keys(this.state.initialOptions).some(key => 
      this.state.currentOptions[key] !== this.state.initialOptions[key]
    )
  }

  switchHandler = (event) => {
    
    this.setState({
        currentOptions: {
          ...this.state.currentOptions,
          [event.target.name]: event.target.checked
        }
    })
  } 
  
  componentDidMount() {
    let code = window.location.search.split('&')[0].split('=')[1]
    window.history.replaceState({ id: 'dashboard' }, 'Dashboard', 'http://localhost:3002')
  
    fetch(`http://localhost:3001/useroptions?${code ? 'code=' + code : ''}`, {
      // mode: 'no-cors',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => {
        
        this.setState({
          twitchDetails: data.twitchDetails,
          initialOptions: data.options,
          currentOptions: data.options,
        })
      })
    }


  render() {
    return (
      <div>
        {console.log(this.state)}
      {this.state.initialOptions ?
      //  <button onClick={this.updateOptions}>update</button>
       <Main  initialOptions={this.state.initialOptions}
              currentOptions={this.state.currentOptions}
              data={this.state} 
              switchHandler={this.switchHandler}
              areIdenticalObjects={this.areIdenticalObjects}
              saveChanges={this.saveChanges} />
       : null
      }
     
      </div>
    )
  }
}
