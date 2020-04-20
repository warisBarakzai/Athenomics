import React, { Component } from 'react';
import ipfs from './ipfs';


class PendingRequests extends Component {

	constructor(props){
    super(props);
    this.state = {
      pending_requests: {},
      hash: ''
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
    var pending_update = {}
    const genomesCount = await this.props.contract.methods.genomesCount().call()
    for(var i=1; i <= genomesCount; ++i){
      const status = await this.props.contract.methods.getGenomeRequestStatus(i, this.props.account).call()
      if(status.toNumber() != 0){
        pending_update[i] = status.toNumber()
      }
    }
    this.setState({ pending_requests: pending_update })
    console.log(this.state.pending_requests)
  }

  completeTransaction = async event =>{
    const genome_index = event.target.id
    const status = event.target.value
    const genome_address = await this.props.contract.methods.getGenomeOwner(genome_index).call()
    // console.log(seq)
    var completed = true;
    const seq = await this.props.contract.methods.returnSeq(genome_index).call()
    this.setState({hash:seq})
    await window.web3.eth.sendTransaction(
      {
        from: this.props.account,
        to: genome_address,  
        value: window.web3.utils.toWei("0.033", "ether")
      },
      function(e, result) { 
        if(e){
          window.alert('Transaction failed, please retry or delete')
          console.log(e)
        } else {
          window.location.replace('https://ipfs.infura.io/ipfs/' + seq)
        }
      }
    )
  }

  handleClick = async event => {
    const index = event.target.id
    const status = event.target.value
    await this.props.contract.methods.changeRequest(index, this.props.account, 1).send({from: this.props.account})
  }

  renderTableData() {
  	var map_array = []
  	for(const entries of Object.entries(this.state.pending_requests)){
      const genome_index = entries[0]
      const status = entries[1]
      const deleted = entries[2]
      var disabled = true
      var message = 'Pending'
      if(status == 3) { 
        disabled = false
        message = 'Complete'
      } else if (status == 1){
        message = 'Rejected'
      }
			map_array.push(
				<tr id={genome_index} key={genome_index}>
          <td id={genome_index}> {entries[0]} </td>
          <td>  <button className="btn btn-dark"
                  id={genome_index} value={status} onClick={this.completeTransaction} 
                  disabled={disabled}>
                  {message}
                </button> 
          </td>
          <td>
              <button className="btn btn-dark"
                  id={genome_index} value={status} onClick={this.handleClick}>
                  Delete
              </button> 
          </td>
        </tr>
			)
  	}
    return map_array
  }

	render() {
		return (
      <div className="container">
        <div className="container-fluid mt-6">
          <h1 id='title'>Pending Requests</h1>
          <table id='genome_requests' className="table table-hover table-bordered" onChange={this.updateTable}>
            <thead>
              <tr>
                <th scope="col">Genome Index</th>
                <th scope="col">Status</th>
                <th scope='col'> Delete </th>
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

export default PendingRequests;