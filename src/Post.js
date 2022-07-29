import React from "react"

function Post(props) {
    return (
      <div className="list">
        <h4> {props.title} </h4>
        <p>{props.content}</p>
        <hr />
      </div>
    )
  }

export default Post;