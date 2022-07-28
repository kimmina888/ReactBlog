import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']); 
  let posts = '집에 가고 싶다';
  return (
    <div className="App">
      <div className="black-nav">
          <div style ={{color : 'blue', fontSize : '30px'}}>개발 BLOG</div>
      </div>
      <div className="list">
        <h4> { 글제목[0] } </h4>
        <p>내용을 씁시다</p>
        <hr/>
      </div>
      <div className="list">
        <h4> { 글제목[1] } </h4>
        <p>내용을 씁시다</p>
        <hr/>
      </div>
      <div className="list">
        <h4> { 글제목[2] } </h4>
        <p>내용을 씁시다!</p>
        <hr/>
      </div>
      <img src={logo} />
      <h4>{posts}</h4>
    </div> 
  );
}

export default App;
