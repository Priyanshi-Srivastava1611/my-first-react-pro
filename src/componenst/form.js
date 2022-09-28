import React, { Component } from 'react'

export default class Form extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
		 username:'',
		 comment:''
	  }
	}
	handleusername =(event) =>{
		this.setState(
			{
				username:event.target.value
			}
		)
	}
	handlecomment =(event)=>
	{
		this.setState(
			{
			comment:event.target.value
			}
		)
	}
  render() {
	return (
	  <form>
		<div>
			<label>Username</label>
			<input type='text' value={this.state.username} onChange={this.handleusername}></input>
			<label>Textarea</label>
			<textarea value={this.state.comments} onChange={this.handlecomment}></textarea>
		</div>
	  </form>
	)
  }
}
