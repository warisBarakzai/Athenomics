import React, { Component } from 'react';
import logo from '../logo.png';
import ipfs from './ipfs';
import Modal from './modal';

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
    try {
      const genomeExists = 
          await this.props.contract.methods.checkGenomeRequestExists(index).call()
      console.log(genomeExists, 'genome works')
    } catch {
      console.log("genomeExists fails")
    }
    try {
      const memberExists = 
          await this.props.contract.methods.checkMemberExists().call()
      console.log(memberExists, 'member works')
    } catch {
      console.log("memberExists fails")
    }
    // if(genomeExists){
    //   window.alert('Open Request for this Genome already exists!')
    //   return
    // } else if (this.props.address == this.genomes[index-1].owner) {
    //   window.alert('Cannot Request Owned Genome!')
    //   return
    // } else if(memberExists) {
    //   window.alert('Must Register Before Requesting Genomes')
    // }
    this.props.contract.methods.addRequest(index).send({from: this.props.account}).then((r)=>{
      console.log(r)
    })
  }

  showModal = e => {
    if(this.state.show[0]){
      this.setState({
        show: [!this.state.show[0], 'Show Modal']
      })
    } else {
      this.setState({
        show: [!this.state.show[0], 'Close Modal']
      })
    }
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
        <div className="container-fluid mt-6">
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
        <div className="container-fluid mt-7">
          <button className="toggle-button" id="centered-toggle-button"
              onClick={e => {
                this.showModal(e);
              }}>
            {" "}{this.state.show[1]}{" "}</button>

          <Modal onClose={this.showModal} show={this.state.show[0]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
            fuga omnis a sed impedit explicabo accusantium nihil doloremque
            consequuntur.
          </Modal>
        </div>
      </div>
    );
  }
}

export default Home;
