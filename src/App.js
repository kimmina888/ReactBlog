import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '집에 가고 싶다';
  return (
    <div className="App">
      <div className="black-nav">
          <div style ={{color : 'blue', fontSize : '30px'}}>개발 BLOG</div>
      </div>
      <img src={logo} />
      <h4>{posts}</h4>
    </div>
  );
}

export default App;
