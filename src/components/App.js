import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';
import ipfs from './ipfs';
import Web3 from 'web3';
import Athenomics from './../abi/Athenomics.json';

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
    await this.updateTable()
  }

  // Get the account
  // Get the network
  // Get Smart Contract
  // --> ABI: Athenomics.abi
  // --> Address: networkData.address
  // Get Genomic Hash
  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
    const networkId = await web3.eth.net.getId()
    const networkData = Athenomics.networks[networkId]
    if(networkData) {
      // Fetch Contract
      console.log(networkData.address)
      const contract = web3.eth.Contract(Athenomics.abi, networkData.address)
      this.setState({ contract: contract })    
    } else {
      window.alert('Smart contract not deployed')
    }
  }

  constructor(props){
    super(props);
    this.state = {
      account: '',
      buffer: null,
      ipfsHash: null,
      source: null,
      contract: null,
      genomes: [],
    }

  }

  async loadWeb3() {
    if(window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert("Please use MetaMask");
    }
  }

  captureFile = (event) =>{
    event.preventDefault();
    // process file for IPFS
    const file = event.target.files[0];
    const extension = file.name.split('.')[1];
    if(extension !== 'fasta' && extension !== 'fa'){
      return;
    }
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend  = () => {
      this.setState({ buffer: Buffer(reader.result) })
    }
  }

  captureSource = (event) => {
    event.preventDefault()
    this.setState({source: event.target.value})
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
      console.log('ipfsHash', this.state.ipfsHash, this.state.source)
      this.state.contract.methods.addGenome(result[0].hash, this.state.source).send({from: this.state.account}).then((r)=>{
        console.log(r)        
      })

    })
  }

  async updateTable() {
    this.state.genomes = []
    const genomesCount = await this.state.contract.methods.genomesCount().call()
    for(var i=1; i <= genomesCount; ++i){
      const testGenome = await this.state.contract.methods.genomes(genomesCount).call()
      this.state.genomes.push(testGenome);
    }
  }

  // renderTableData() {
  //   console.log(this.state.genomes)
  //   return this.state.genomes.map((genome, index) => {
  //     console.log("Render Table Data", genome, index);
  //     const { a, b, c, owner, seq, source_type } = genome //destructuring
  //     return (
  //       <tr key={owner}>
  //          <td>{owner}</td>
  //          <td>{seq}</td>
  //          <td>{source_type}</td>
  //       </tr>
  //     )
  //   })
  // }

  renderTableData() {
    return this.state.genomes.map((genome, index) => {
      return (
        <tr key={genome.owner}>
          <td>{genome.owner}</td>
          <td>{genome.seq}</td>
          <td>{genome.source_type}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Athenomics
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-nonee d-sm-block">
              <small className="text-white">{this.state.account}</small>
            </li>
          </ul>
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
                  <label htmlFor="sourceType">Source</label>
                  <input type="text" id="source" placeholder="Enter source" onChange={this.captureSource}/>
                  <input type='submit'/>
                </form>  
              </div>
            </main>
          </div>
        </div>
        <div>
          <h1 id='title'>Publically Available Genomes</h1>
          <table id='genomes' onChange={this.updateTable}>
            <tbody>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
