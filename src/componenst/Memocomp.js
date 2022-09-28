import React, { Component } from 'react'

export default class Memocomp extends Component {
	constructor(props) {
	  super(props)
	
	  this.inputRef=React.createRef()
	}
	componentDidMount()
	{
		this.inputRef.current.focus()
		console.log('inputref')
	}
  render() {
	return (
	  <div>
		<input type='text' ref={this.inputRef}/>
	  </div>
	)
  }
}
