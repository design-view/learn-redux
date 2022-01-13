import { useState } from 'react';
import React from 'react';

function Todos({ todos, onCreate, onToggle }) {
    //인풋의 입력되는 값을 관리하는 상태 
    const [ text, setText ] = useState('');
    //인풋의 입력값이 변경될때 실행하는 함수
    const onChange = e => { 
        setText(e.target.value);
        console.log(text);
    };
    const onSubmit = e => {
    e.preventDefault();  //submit이벤트 발생했을때 새로고침 방지(기본이벤트를 제거)
    onCreate(text);
    console.log(todos, text);
    setText('');    //input.value초기화
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input placeholder='할일을 입력하세요' 
                onChange={onChange} value={text}/>
                <button type="submit">등록</button>
            </form>
            <ul>
                {
                    todos.map(todo=><li style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
                        key={todo.id} onClick={()=>{onToggle(todo.id)}}>{todo.text}</li>)
                }
            </ul>
        </div>
    );
}

export default Todos;