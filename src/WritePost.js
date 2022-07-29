import React, {useState} from 'react';

function WritePost(){
    const [inputs, setInputs]= useState({title:'',text:''});
    const {title, text} = inputs;
    const WritePostF = (e)=>{
        alert(title+' : '+text);
        setInputs({
            title:'',
            text:''
        });
    };
  
    const ChangeData = (e) =>{
        
        const newInputs={
            ...inputs,
            [e.target.name]:e.target.value
        };
        setInputs(newInputs);
    };
  
    return (
      <div className='box'>
        <h3>글작성</h3>
        <hr/>
        <input placeholder='제목' name='title' value={title} onChange={ChangeData}/><br/>
        <textarea placeholder='내용을 입력하세요' name="text" value={text} onChange={ChangeData}/>
        <br/>
        <button onClick={WritePostF}>작성</button>
      </div>
    )
  }
  
  export default WritePost;