import React, { useState } from "react";
const DetailPost = (props) =>{
  let [userName] = useState('익명');
  let [comment, setComment] = useState('');
  let [feedComments, setFeedComments] = useState([]);
  let [isValid, setIsValid] = useState(false);
  const {title, date, content } = props;
  let post = e => {
    const copyFeedComments = [...feedComments];
    copyFeedComments.push(comment);
    setFeedComments(copyFeedComments);
    setComment('');
  }
  
  const CommentList = props => {
    return (
      <div className="userCommentBox">
        <p className="userName">{props.userName}</p>
        <div className="userComment">{props.userComment}</div>
      </div>
    )
   }
    return (
        <div className="modal">
          <h2>{title}</h2>
          <p>{date}</p>
          <p>{content}</p>
          <div className="Comments">
              <input type="text" className="inputComment" placeholder="댓글 달기.."
              onChange={e => {
               setComment(e.target.value);
              }}
              onKeyUp = { e => {
                  e.target.value.length > 0?
                  setIsValid(true):
                  setIsValid(false);
                }
              }
              value = {comment}
            />
            <button
            type="button"
            className={
              comment.length > 0? 'submitCommentActive':
              'submitCommentInactive'
            }
            onClick={post} disabled={isValid? false : true}
            >게시</button>
             {feedComments.map((commentArr, i) => {
              return (
                <CommentList
                  userName = {userName}
                  userComment = {commentArr}
                  key = {i}
                />
              );
           })}
          </div>
      </div>
    );
}

export default DetailPost;