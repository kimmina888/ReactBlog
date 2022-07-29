import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal';

function App() {
  let contents = ``;

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let posts = '집에 가고 싶다';

  const [inputs, setInputs] = useState({ title: '', text: '' });
  const { title, content } = inputs;
  const [postList, setPostList]=useState([{title:'1',content:'11'},{title:'2',content:'22'}]);
  
  const WritePostF = (e) => {
    alert(title + ' : ' + content);
    postList.push({...inputs});
    //alert(postList[0].title);
    setInputs({
      title: '',
      content: ''
    });
  };

  const ChangeData = (e) => {

    const newInputs = {
      ...inputs,
      [e.target.name]: e.target.value
    };
    setInputs(newInputs);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ color: 'blue', fontSize: '30px' }}>개발 BLOG</div>
      </div>

      <div className='box'>
        <h3>글작성</h3>
        <hr />
        <input placeholder='제목' name='title' value={title} onChange={ChangeData} /><br />
        <textarea placeholder='내용을 입력하세요' name="content" value={content} onChange={ChangeData} />
        <br />
        <button onClick={WritePostF}>작성</button>
      </div>

      <div>
        {
          postList.map(element=>
            <div>
              <Post title={element.title} content={element.content}/>
            </div>
            )
        }
      </div>

      <Modal/>
      <img src={logo} />
      <h4>{posts}</h4>
    </div>
  );
}

function Post(props) {
  return (
    <div className="list">
      <h4> {props.title} </h4>
      <p>{props.content}</p>
      <hr />
    </div>
  )
}

export default App;
