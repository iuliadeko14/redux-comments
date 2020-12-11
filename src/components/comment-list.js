import React from 'react';

const CommentList = (props) => {
  const { comments, deleteComment } = props;
  return (
    <ol className = 'list-comments'>
      {
        
        comments.map(comment => {
          return (
            <li key = {comment.id}>
              <div className = 'comment'>
                <div className = 'comment-name'>
                  {comment.name} <span className = 'comment-time'>{comment.time}</span>
                  <button className = 'comment-remove' onClick = {ev => deleteComment(comment.id)}>&times;</button>
                </div>
                <div className = 'comment-text'>
                  {comment.text} 
                </div>
              </div>
            </li>
          );
        })
      }
    </ol>    
  );
}

export default CommentList;