import React, { Component } from 'react'
import './App.css';
import Main from './components/Main'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

        twitchDetails: null,
        initialOptions: null,
        currentOptions: null,
      
    };

    // this.areIdenticalObjects = this.areIdenticalObjects.bind(this)
  }
  

  areIdenticalObjects = () => {
    return Object.keys(this.state.initialOptions).some(key => 
      this.state.currentOptions[key] !== this.state.initialOptions[key]
    )
  }

  switchHandler = (event) => {
    // console.log(event.target.checked, "target value")
    
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
  
    var options = null
  
    fetch(`http://localhost:3001/useroptions?${code ? 'code=' + code : ''}`, {
      // mode: 'no-cors',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        options = data.options
        this.setState({
          twitchDetails: data.twitchDetails,
          initialOptions: data.options,
          currentOptions: data.options,
        })
      })
  
  
  
 this.updateOptions = async () => {
    options.history = true
    // console.log(options, "options line 28")
    fetch('http://localhost:3001/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(options),
      credentials: 'include',
    })
  }

}

  render() {
    return (
      <div>
      {this.state.initialOptions ?
      //  <button onClick={this.updateOptions}>update</button>
       <Main  initialOptions={this.state.initialOptions}
              currentOptions={this.state.currentOptions}
              data={this.state} 
              switchHandler={this.switchHandler}
              areIdenticalObjects={this.areIdenticalObjects} />
       : null
      }
     
      </div>
    )
  }
}
