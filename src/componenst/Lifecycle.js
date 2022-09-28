import React, { Component } from 'react'

export class Lifecycle extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
		 name:'Vishwas'
		 
	  }
	  console.log('constructor wala')
	}
	static getDerivedState(props,state)
	{
		console.log('get derived wla')
		return null
	}
	componentDidMount()
	{
		console.log('compoent wala')
	}
  render() {
	console.log('render')
	return (
	  <div>Hey</div>
	)
  }
}

export default Lifecycle