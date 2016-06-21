import React, {Component, PropTypes} from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import Comment from '../components/Comment'
import { CommentsCollection } from '../../collections/comments'

class CommentList extends Component{
	render(){

		let commentList = this.props.comments.map((comment) =>{
			return(<Comment key={comment._id} comment={comment.comment}/>)
		})
		return(
			<div>
			 {commentList}
			</div>
		)
	}
}

CommentList.propTypes = {
	comments: PropTypes.array.isRequired,
}

export default createContainer(() => {
			return {
				comments: CommentsCollection.find({}).fetch(),
			}
}, CommentList)
