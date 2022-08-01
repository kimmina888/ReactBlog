import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';
import DetailPost from './DetailPost';

function App() {
  // let contents = ``;
  // let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  // let posts = '집에 가고 싶다';

  const [inputs, setInputs] = useState({ title: '', date:'', text: '' });
  const { title, content } = inputs;
  const [postList, setPostList]=useState([
    {title:'게시글 1', date:'2022.07.28', content:'11'},
    {title:'게시글 2', date:'2022.07.29', content:'22'}
  ]);
  const [detailedPost, setDetailedPost]=useState({detailedTitle:'', detailedDate:'', detailedContent:''});
  

  const WritePostF = (e) => {
    if(!title.trim()) {
      alert('제목을 입력하세요.');
      return ;
    }

    if(!content.trim()){
      alert('본문을 입력하세요.');
      return ;
    }

    alert('글이 성공적으로 작성되었습니다.');
    // alert(title + ' : ' + content);

    var todayDate = new Date().toLocaleDateString().replace(/ /g, "");
    // var todayDate = new Date().toDateString('YYYY.MM.DD');//.toString('YYYY.MM.DD');
    postList.push({...inputs, date:todayDate});
    
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
        <div style={{ color: 'white', fontSize: '30px' }}>개발 BLOG</div>
      </div>

      <div className='box'>
        <h2 id="hed">글 작성</h2>
        <input placeholder='제목' name='title' value={title} onChange={ChangeData} /><br />
        <textarea placeholder='내용을 입력하세요' name="content" value={content} onChange={ChangeData} />
        <br />
        <button onClick={WritePostF}
        >작성</button>
      </div>

      <div>
        {
          postList.map(element=>
            <div onClick={()=>{
              setDetailedPost({
                detailedTitle: element.title,
                detailedDate: element.date,
                detailedContent: element.content
              })
            }}>
              <Post title={element.title} date={element.date} content={element.content}/>
            </div>
            )
        }
      </div>
      
      {
        (detailedPost.detailedTitle==='')
        ? null
        : <DetailPost title={detailedPost.detailedTitle} date={detailedPost.detailedDate} content={detailedPost.detailedContent}/>
      }

      {/* <img src={logo} /> */}
      {/* <h4>{posts}</h4> */}
    </div>
  );
}



export default App;
