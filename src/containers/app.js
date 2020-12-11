import React from 'react';
import {connect} from 'react-redux';
import {addComment, deleteComment} from '../actions/actions'

import CommentList from '../components/comment-list';
import AddComment from '../components/add-comment';

let App = (props) => {
  const {
    comments, addComment, deleteComment
  } = props;
  return (
    <div className = 'container'>
      <AddComment addComment = {addComment} />
      <CommentList comments = {comments} deleteComment = {deleteComment} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    comments: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (name, text) => dispatch(addComment(name, text)),
    deleteComment: (id) => dispatch(deleteComment(id))
  };
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;