import React, { Component } from 'react';
import background from './background.jpg';
import './App.css';
<<<<<<< Updated upstream
import ipfs from './ipfs'
=======

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })
>>>>>>> Stashed changes

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      buffer: null,
      ipfsHash: null
    }; 
    this.captureFile = this.captureFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  captureFile(event) {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log("Submitting file to ipfs...")
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('Ipfs result', result)
      if(error) {
        console.error(error)
        return
      }
      this.setState({ipfsHash: result[0].hash})
    })
  }


  

  render() {
    const mystle = {
      alignItems : "center"
    };
    return (
      <div  className="container">
        <p className="title"> Athenomics </p>
        <button type="button" className="btn btn-success">Success </button>

      </div>
    );
  }
}

export default App;
