import React, { Component } from 'react';
import './PendingRequests.css';


class PendingRequests extends Component {

// 1 rejected 2 pending 3 approved 4 completed
	constructor(props){
    super(props);
    this.state = {
      pending_requests: {},
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
      try{
        const status = await this.props.contract.methods.getGenomeRequestStatus(i, this.props.account).call()
        pending_update[i] = status.toNumber()
      } catch {
        continue
      }
    }
    this.setState({ pending_requests: pending_update })

  }

  handleClick = async event =>{
    // event.target.style.visibility = 'hidden'
    const index = event.target.id
    const mem_address = this.props.account
    var pending_requests_update = this.state.pending_requests
    console.log(this.state.pending_requests)
    console.log(index, mem_address)
    await this.props.contract.methods.changeRequest(index, mem_address,0).send({from: this.props.account}).then((r)=>{
      console.log(r)
    })
    pending_requests_update[index] = 0
    console.log('deleted')
    this.setState({pending_requests: pending_requests_update})
    this.forceUpdate()

  }

  completeTransaction = async event =>{
    let contract = this.props.contract
    let account = this.props.account
    const genome_index = event.target.id
    const status = parseInt(event.target.value)
    const genome_address = await this.props.contract.methods.getGenomeOwner(genome_index).call()
    if(status === 4){
      const seq = await contract.methods.returnSeq(genome_index).call()
      var win = window.open('https://ipfs.infura.io/ipfs/' + seq, '_blank')
      win.focus()
    } else {
      window.web3.eth.sendTransaction(
        {
          from: this.props.account,
          to: genome_address,  
          value: window.web3.utils.toWei("0.0003", "ether")
        },
        async function(e, result){ 
          if(e){
            window.alert('Transaction failed, please retry or delete')
            console.log(e)
          } else {  
            const seq = await contract.methods.returnSeq(genome_index).call()
            var win = window.open('https://ipfs.infura.io/ipfs/' + seq, '_blank')
            win.focus()
            await contract.methods.changeRequest(genome_index, account, 4).send({from: account})
          }
        }
      )
    }
    // download from hash and delete transaction   
  }

  renderTableData() {
    var map_array = []
  	
  	for(const entries of Object.entries(this.state.pending_requests)){
      const genome_index = entries[0]
      const status = entries[1]
      var disabled = true
      var message = 'Pending'
      if(status === 3) { 
        disabled = false
        message = 'Complete'
      } else if (status === 1){
        message = 'Rejected'
      } else if (status === 4) {
        disabled = false
        message = 'Redownload'
      }
      if(status !== 0){
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
                <button className="btn btn-dark" id={genome_index} 
                value={status} onClick={this.handleClick}>
                    Delete
                </button> 
            </td>
          </tr>
  			)
      }
  	}
    return map_array
  }

	render() {
		return (
      <div className="container">
        <div className="container-fluid mt-6">
          <h1 id='title2'>Pending Requests</h1>
          <table id='genome_requests' className="table table-hover table-bordered" onChange={this.updateTable}>
            <thead className='thead-dark'>
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