import React from 'react'
import { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'

class App extends React.Component{
	constructor(){
		super()
	}

	render(){
		return(<h1>Hola mundo, desde React JS</h1>)
	}
}

Meteor.startup(() =>{
			render(<App />, document.getElementById('container'))
		})
