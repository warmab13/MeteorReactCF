import React, {Component, PropTypes} from 'react'
import { Meteor } from 'meteor/meteor'

export default class Comment extends Component{
	render(){
		return(
			<h4>{this.props.comment}</h4>
		)
	}
}
