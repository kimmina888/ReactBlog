import React from "react";

const DetailPost = (props) =>{
  const {title, date, content } = props;

    return (
        <div className="modal">
          <h2>{title}</h2>
          <p>{date}</p>
          <p>{content}</p>
      </div>
    );
}

export default DetailPost;