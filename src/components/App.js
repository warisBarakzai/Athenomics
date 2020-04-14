import React, { Component } from 'react';
import Web3 from 'web3';
import Athenomics from './../abi/Athenomics.json';
import Home from './Home';
import NavBar from './NavBar';
import OpenRequests from './OpenRequests';
import PendingRequests from './PendingRequests';
import {Route, link} from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true,
      account: '',
      contract: null,
    }
  }

  async componentDidMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
    this.setState({ loading: false }) 
    console.log(this.state)
  }

  // Get the account
  // Get the network
  // Get Smart Contract
  // --> ABI: Athenomics.abi
  // --> Address: networkData.address
  // Get Genomic Hash

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

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
    const networkId = await web3.eth.net.getId()
    const networkData = Athenomics.networks[networkId]
    if(networkData) {
      // Fetch Contract
      const contract = web3.eth.Contract(Athenomics.abi, networkData.address)
      this.setState({ contract: contract })   
    } else {
      window.alert('Smart contract not deployed')
    }
  }

  render() {
    if(this.state.loading==true){
      return(
        <h2>
          Initializing (If this hangs, there may be an issue with MetaMask)...
        </h2>
      )
    }
    return (
      <div className="App">
        <NavBar account={this.state.account}/>
        <Route exact path="/" 
          render={(props) => <Home {...props} 
          account={this.state.account} 
          contract={this.state.contract}/>}
        />
        <Route exact path="/OpenRequests" 
          render={(props) => <OpenRequests {...props} 
          account={this.state.account} 
          contract={this.state.contract}/>}
        />
        <Route exact path="/PendingRequests" 
          render={(props) => <PendingRequests {...props} 
          account={this.state.account} 
          contract={this.state.contract}/>}
        />
      </div>
    );
  }
}

export default App;
