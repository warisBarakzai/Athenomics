import React, { Component } from 'react';
import './Register.css'


class Register extends Component {

	constructor(props){
    super(props);
    this.state = {
      institution_name:'',
    }
  }

   handleSubmit = async event => {
    if(!this.props.contract){
      console.log('No Contract Connected!')
      return
    }
    event.preventDefault()
    console.log(this.state.institution_name)
    var institution_name = this.state.institution_name
    console.log(institution_name)
    this.props.contract.methods.addMember(institution_name).send({from: this.props.account}).then((r)=>{
        console.log(r)        
      })
  }
  captureSource(event){
    event.preventDefault()
    console.log(event.target.value)
    this.setState({institution_name:event.target.value})
    console.log(this.state.institution_name)
  }


	render() {
		return (
     <div className="SearchBar">
        <h1>SearchBar</h1>
 
      <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Institution Name</h5>
            <form class="form-signin" id='register' onSubmit={this.handleSubmit}>
            <input type='text'  className="form-control" onChange={this.captureSource.bind(this)} placeholder="Enter Name"/>          
            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
      </div>

		)
	}
}

export default Register;