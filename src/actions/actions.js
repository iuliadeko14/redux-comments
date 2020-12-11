let state = localStorage.getItem('comments') === null ? 4 : JSON.parse(localStorage.getItem('comments'));
let nextCommentId = localStorage.getItem('comments') === null ? 4 : JSON.parse(localStorage.getItem('comments')).length === 0 ? 1 : state[state.length  - 1].id + 1;

export const addComment = (name, text) => {

  const newTime = new Date();
  return {
    type: 'ADD_COMMENT',
    id: nextCommentId++,
    name,
    text,
    time: `${newTime.getHours()}:${newTime.getMinutes() < 10 ? '0' + newTime.getMinutes() : newTime.getMinutes()}`
  }
}

export const deleteComment = (id) => {
  return {
    type: 'DELETE_COMMENT',
    id
  }
}