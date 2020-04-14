import React, { Component } from 'react';


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
        owned_genomes_update[testGenome.index.toNumber()] = 
          await this.props.contract.methods.getRequest(testGenome.index).call()
      }
    }
    this.setState({ owned_genomes: owned_genomes_update })
    console.log(this.state.owned_genomes)
  }

	render() {
		return (
			<div>
				<h1>Open Requests</h1>
			</div>
		)
	}
}

export default OpenRequests;