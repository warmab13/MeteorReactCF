import React from 'react'
import { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'
import CommentList from '../imports/client/containers/CommentList'


Meteor.startup(() =>{
			render(<CommentList />, document.getElementById('container'))
		})
