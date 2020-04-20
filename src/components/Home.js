import React, { Component } from 'react';
import logo from './logo.png';
import ipfs from './ipfs';
import Modal from './modal';
import './Home.css'

class Home extends Component {

  async componentWillMount() {
    await this.updateTable()
  }

  constructor(props){
    super(props);
    this.state = {
      buffer: null,
      source: null,
      genomes: [],
      show: [false, 'Show Modal'],
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
    if(!this.props.contract){
      console.log('No Contract Connected!')
      return
    }
    event.preventDefault()
    console.log("Submitting file to ipfs...")
    ipfs.add(this.state.buffer, (error, result) => {
      if(error) {
        console.error(error)
        return
      }
      this.props.contract.methods.addGenome(result[0].hash, this.state.source).send({from: this.props.account}).then((r)=>{
        console.log(r)        
      })

    })
  }

  async updateTable() {
    if(!this.props.contract){
      console.log('No Contract Connected!')
      return
    }
    var genomes_update = []
    const genomesCount = await this.props.contract.methods.genomesCount().call()
    for(var i=1; i <= genomesCount; ++i){
      const testGenome = await this.props.contract.methods.genomes(i).call()
      genomes_update.push(testGenome);
    }
    this.setState({genomes: genomes_update})
  }

  handleClick = async event =>{
    if(!this.props.contract){
      console.log('No Contract Connected')
      return
    }
    var index = parseInt(event.target.innerText)
    var genomeExists = 
        await this.props.contract.methods.checkGenomeRequestExists(index, this.props.account).call()
    genomeExists = genomeExists.toNumber()
    const memberExists = 
        await this.props.contract.methods.checkMemberExists(this.props.account).call()
    if(this.props.account == this.state.genomes[index-1].owner) {
      window.alert('Cannot Request Owned Genome!')
      return
    } else if (genomeExists == 1 || genomeExists == 2 || genomeExists == 3) {
      window.alert('Open Request for this sample already exists')
      return
    } else if(memberExists == false) {
      window.alert('Must Register Before Requesting Genomes')
      return
    }
    this.props.contract.methods.addRequest(index).send({from: this.props.account}).then((r)=>{
      console.log(r)
    })
  }

  renderTableData() {
    return this.state.genomes.map((genome, index) => {
      return (
        <tr key={genome.index.toNumber()}>
          <td id={genome.index}> {genome.index.toNumber()} </td>
          <td key={genome.owner} >{genome.owner}</td>
          <td key={genome.seq} >{genome.seq}</td>
          <td key={genome.source_type} >{genome.source_type}</td>
          <td> <button className="btn btn-dark">{genome.index.toNumber()} </button> </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="container">
        <div className="container-fluid mt-3">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto" id='div1'>
                <a
                  href="./"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} className="App-logo" alt="logo" />
                </a>
                <h2> Add Genome </h2>
                <form className='form1' onSubmit={this.onSubmit} >
                  <input type='file' onChange={this.captureFile} />
                  <label htmlFor="sourceType">Source</label>
                  <input type="text" id="source" placeholder="Enter source" onChange={this.captureSource}/>
                  <input type='submit'/>
                </form>  
              </div>
            </main>
          </div>
        </div>
        <div className="container-fluid mt-6">
          <h1 id='title'>Publically Available Genomes</h1>
          <table id='genomes' className="table table-hover table-bordered table-striped" onChange={this.updateTable}>
            <thead className='thead-dark'>
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

export default Home;
