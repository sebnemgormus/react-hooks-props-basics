import React from "react";

function Comment(props) {
  return <div className="comment">{props.numberOfComment} • {props.commentText}</div>;
}

export default Comment;
