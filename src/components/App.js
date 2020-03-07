import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';

const ipfsClient = require('ipfs-http-client');

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      buffer: null
    }; 
  }

  captureFile = (event) =>{
    event.preventDefault();
    console.log("file captured...");
    // process file for IPFS
    const file = event.target.files[0];
    const extension = file.name.split('.')[1];
    console.log(extension);
    if(extension !== 'fasta' && extension !== 'fa'){
      console.log('nope', extension);
      return;
    }
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend  = () => {
      this.setState({ buffer: Buffer(reader.result) })
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log('submitting form');

  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Athenomics
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} className="App-logo" alt="logo" />
                </a>
                <p>&nbsp;</p> 
                <h2> Add Genome </h2>
                <form onSubmit={this.onSubmit} >
                  <input type='file' onChange={this.captureFile} />
                  <input type='submit'/>
                </form>  
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
