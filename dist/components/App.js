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
      testGenome.index = i;
      this.state.genomes.push(testGenome);
    }
  }

  handleClick = async event =>{
    console.log("clicked")
    console.log(parseInt(event.target.innerText))
    var index = parseInt(event.target.innerText)
    console.log(index)
    console.log(this.state.genomes)
    console.log(this.state.genomes[index-1].owner)
  }


  renderTableData() {
    return this.state.genomes.map((genome, index) => {
      return (
        <tr key={genome.owner}>
          <td id={genome.index}> {genome.index} </td>
          <td key={genome.owner} >{genome.owner}</td>
          <td key={genome.seq} >{genome.seq}</td>
          <td key={genome.source_type} >{genome.source_type}</td>
          <td id={genome.index}> <button className="btn btn-dark">{genome.index} </button> </td>
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
        <div className="container-fluid mt-5">
          <h1 id='title'>Publically Available Genomes</h1>
          <table id='genomes' className="table table-hover table-bordered" onChange={this.updateTable}>
            <thead>
              <tr>
                <th scope="col">Index</th>
                <th scope="col">Owner</th>
                <th scope="col">Hash</th>
                <th scope="col">sourceType</th>
                <th scope="col">button</th>
                
              </tr>
            </thead>

            <tbody onClick={this.handleClick}>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
