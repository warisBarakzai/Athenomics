import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';
import ipfs from './ipfs';
import Web3 from 'web3';
import Athenomics from './../abi/Athenomics.json';
import background from './background.jpg';

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
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
    console.log(accounts, this.state)
    const networkId = await web3.eth.net.getId()
    console.log(networkId)
    const networkData = Athenomics.networks[networkId]
    if(networkData) {
      // Fetch Contract
      const contract = web3.eth.Contract(Athenomics.abi, networkData.address)
      this.setState({ contract })
      // const genomesCount = await contract.methods.genomesCount().call()
      // console.log(genomesCount.toString())
      // consolee.log(contract.methods.genomes(genomesCount-1))
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
      ethAddress:'',
      transactionHash:'',
      txReceipt: ''
    }; 
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

  captureSource = (event) => {
    event.preventDefault()
    console.log(event.target.value)
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


  





  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            // href="http://www.dappuniversity.com/bootcamp"
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
                  <label for="sourceType">Source</label>
                  <input type="text" id="source" placeholder="Enter source" onChange={this.captureSource}/>
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
