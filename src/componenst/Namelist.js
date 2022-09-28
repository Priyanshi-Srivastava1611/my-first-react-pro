import React from 'react'

function Namelist() {
	 const names=['Bruce','clark','Diana']
	
	/*const persons=[
		{
			id:1,
			name:'Bruce'
		},
		{
			id:2,
			name:'Clark'
		}
	]*/
	const namelist=names.map((name,index)=><p key={index}>I am{index+1} and name is {name}</p>)
  return (
	<div>
		<h2>{namelist}</h2>
	</div>
  )
}

export default Namelist