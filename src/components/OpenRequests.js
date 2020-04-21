import React, { Component } from 'react';
import './OpenRequests.css'


class OpenRequests extends Component {

	constructor(props){
    super(props);
    this.state = {
      owned_genomes: {},
    }
  }

	async componentWillMount() {
    await this.updateTable()
  }

  async updateTable() {
    if(!this.props.contract){
      console.log('No Contract Connected!')
      return
    }
    var owned_genomes_update = {}
    const genomesCount = await this.props.contract.methods.genomesCount().call()
    for(var i=1; i <= genomesCount; ++i){
      const testGenome = await this.props.contract.methods.genomes(i).call()
      if(testGenome.owner === this.props.account){
      	var requests_status = [];
      	const requests_all = await this.props.contract.methods.getGenomeRequests(testGenome.index).call()
      	for(var j = 0; j < requests_all.length; ++j){
      		const address = requests_all[j]
      		const status = await this.props.contract.methods.getGenomeRequestStatus(testGenome.index, address).call()
      		const name = await this.props.contract.methods.getMemberName(address).call()
      		requests_status.push([address, status.toNumber(), name])
      	}
      	owned_genomes_update[testGenome.index.toNumber()] = {
      		requests: requests_status,
      		source_type: testGenome.source_type
      	}
      }
    }
    this.setState({ owned_genomes: owned_genomes_update })
  }

  acceptOffer = async event =>{
    if(!this.props.contract){
      console.log('No Contract Connected')
      return
    }
    var owned_genomes_update = this.state.owned_genomes
    const index = parseInt(event.target.id)
    const mem_address = event.target.value
    await this.props.contract.methods.changeRequest(index, mem_address, 3).send({from: this.props.account})
    console.log('accept 1')
    for(var i = 0; i < this.state.owned_genomes[index]['requests'].length; ++i){
    	if(this.state.owned_genomes['requests'][i][0] == mem_address){
    		owned_genomes_update[index]['requests'][i][2]=2
    		console.log('here')
    	}
    }
    this.setState({owned_genomes: owned_genomes_update})
  }

  rejectOffer = async event =>{
    if(!this.props.contract){
      console.log('No Contract Connected')
      return
    }
    var owned_genomes_update = this.state.owned_genomes
    const index = parseInt(event.target.id)
    const mem_address = event.target.value
    await this.props.contract.methods.changeRequest(index, mem_address, 1).send({from: this.props.account}).then((r)=>{
      console.log(r)
    })
    for(var i = 0; i < this.state.owned_genomes[index]['requests'].length; ++i){
    	if(this.state.owned_genomes['requests'][i][0] == mem_address){
    		owned_genomes_update[index]['requests'][i][2]=0
    		console.log('here reject')
    	}
    }
    this.setState({owned_genomes: owned_genomes_update})
  }

  renderTableData() {
  	console.log(this.state.owned_genomes)
  	var map_array = []
  	for(const entries of Object.entries(this.state.owned_genomes)){
  		console.log(entries)
  		const genome_index = parseInt(entries[0])
  		const mem_address_array = entries[1]['requests']
  		const source_type = entries[1]['source_type']
  		for(var i = 0; i < mem_address_array.length; ++i){
  			const mem_address = mem_address_array[i][0]
  			const status = mem_address_array[i][1]
  			const mem_name = mem_address_array[i][2]
  			var disabled = true
  			if(status === 2){
  				disabled = false
  			}
  			if(disabled) {
  				map_array.push(
	  				<tr key={genome_index.toString() + '.' + i.toString()}>
		          <td id={genome_index}> {genome_index} </td>
		          <td key={source_type}> {source_type}</td>
		          <td key={mem_address}>{mem_address}</td>
		          <td> <button className="btn btn-dark" id={genome_index} value={mem_address} onClick={this.acceptOffer} disabled>Accept</button> </td>
		          <td><button className="btn btn-dark" id={genome_index} value={mem_address} onClick={this.rejectOffer} disabled>Reject</button> </td>
		          <td>Pending Response from Member</td>
		        </tr>
	  			)
  			} else {
  				map_array.push(
	  				<tr key={genome_index.toString() + '.' + i.toString()}>
		          <td id={genome_index}> {genome_index} </td>
		          <td key={source_type}> {source_type}</td>
		          <td key={mem_address}>{mem_name} ({mem_address})</td>
		          <td> <button className="btn btn-dark" id={genome_index} value={mem_address} onClick={this.acceptOffer}>Accept</button></td>
		          <td> <button className="btn btn-dark" id={genome_index} value={mem_address} onClick={this.rejectOffer}>Reject</button> </td>
		          <td>Please Respond</td>
		        </tr>
	  			)
  			}
  		}
  	}
  	return map_array
  }

	render() {
		return (
			<div className="container">
				<div className="container-fluid mt-6">
          <h1 id='title1'>Open Requests</h1>
          <table id='genome_requests' className="table table-hover table-bordered" onChange={this.updateTable}>
            <thead className='thead-dark'>
              <tr>
                <th scope="col">Genome Index</th>
                <th scope="col">Source Type</th>
                <th scope="col">Member</th>
                <th scope="col">Accept</th>
                <th scope="col">Reject</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
			</div>
		)
	}
}

export default OpenRequests;