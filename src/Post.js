import React, { useState } from "react"

function Post(props) {
  let [Love, LoveChange] = useState(0);
    return (
      <div className="list">
      <h4> {props.title} <span onClick={() => {LoveChange(Love + 1)} }> ♥</span> {Love} </h4>
        <p>{props.content}</p>
        <hr />
      </div>
    )
  }

export default Post;