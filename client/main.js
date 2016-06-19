import React from 'react'
import { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'

class Comment extends React.Component{
	constructor(){
		super()
	}

	render(){
		return(<h4>{this.props.comment}</h4>)
	}
}

class App extends React.Component{
	constructor(){
		super()
	}

	render(){
		let comments = [
			{
				_id: new Date(),
				comment: 'Hola meteor '

			},
			{
				_id: new Date()+1,
				comment: 'Hola meteor '

			},
			{
				_id: new Date()+2,
				comment: 'Hola meteor '

			}
		]

		let renderComments = comments.map((comment)=>{
			return(<Comment key={comment._id} comment={comment.comment}/>)
		})
		return(
			<div>
				{renderComments}
			</div>
		)
	}
}

Meteor.startup(() =>{
			render(<App />, document.getElementById('container'))
		})
