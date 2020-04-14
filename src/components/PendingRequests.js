import React, { Component } from 'react';


class PendingRequests extends Component {

	constructor(props){
    super(props);
    this.state = {
      pending_requests: {},
    }
  }

	// async componentWillMount() {
 //    await this.updateTable()
 //  }

 //  async updateTable() {
 //    if(!this.props.contract){
 //      console.log('No Contract Connected!')
 //      return
 //    }
 //    var owned_genomes_update = {}
 //    const genomesCount = await this.props.contract.methods.genomesCount().call()
 //    for(var i=1; i <= genomesCount; ++i){
 //      const testGenome = await this.props.contract.methods.genomes(i).call()
 //      if(testGenome.owner === this.props.account){
 //        owned_genomes_update[testGenome.index.toNumber()] = 
 //          await this.props.contract.methods.getRequest(testGenome.index).call()
 //      }
 //    }
 //    this.setState({ owned_genomes: owned_genomes_update })
 //    console.log(this.state.owned_genomes)
 //  }

  // renderTableData() {
  // 	var map_array = []
  // 	for(const entries of Object.entries(this.state.owned_genomes)){
  // 		for(var i = 0; i < entries[1].length; ++i){
  // 			map_array.push(
  // 				<tr key={entries[0].toString() + '.' + i.toString()}>
	 //          <td id={entries[0]}> {entries[0].toNumber()} </td>
	 //          <td key={genome.owner} >{genome.owner}</td>
	 //          <td key={genome.seq} >{genome.seq}</td>
	 //          <td key={genome.source_type} >{genome.source_type}</td>
	 //          <td id={genome.index.toNumber()}> <button className="btn btn-dark">{genome.index.toNumber()} </button> </td>
	 //        </tr>
  // 			)
  // 		}
  // 		return (
  //       <tr key={entries[0]}>
  //         <td id={genome.index}> {genome.index.toNumber()} </td>
  //         <td key={genome.owner} >{genome.owner}</td>
  //         <td key={genome.seq} >{genome.seq}</td>
  //         <td key={genome.source_type} >{genome.source_type}</td>
  //         <td id={genome.index.toNumber()}> <button className="btn btn-dark">{genome.index.toNumber()} </button> </td>
  //       </tr>
  //     )
  // 	}
  // }

	render() {
		return (
      <div className="container">
        <div className="container-fluid mt-5">
          <h1>This is going to list the requests I have sent</h1>
        </div>
      </div>
		)
	}
}

export default PendingRequests;