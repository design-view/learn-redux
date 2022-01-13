import React from 'react';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';
import { useSelector, useDispatch} from 'react-redux';
function TodosContainer() {
    //store의todos값을 반환
    const todos = useSelector(state => state.todos );
    const dispatch = useDispatch();

    const onCreate = text => {
        console.log(text);
        dispatch(addTodo(text))
    };
    const onToggle = id => dispatch(toggleTodo(id));
    return (
        <Todos todos={todos} onCreate={onCreate} onToggle={onToggle}/>
    );
}

export default TodosContainer;