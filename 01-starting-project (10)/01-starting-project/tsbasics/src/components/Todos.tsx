import React,{useContext} from "react";
import Todo from '../models/todo';
import TodoItem from '../components/TodoItem';
import classes from '../components/Todos.module.css';
import{TodosContext} from '../store/todos-context';
const Todos:React.FC=(props)=>{
    const todosCtx=useContext(TodosContext)
    return(<ul className={classes.todos}>
        {todosCtx.items.map((item)=>(
            <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null,item.id)}/>
        ))}
    </ul>)
}
export default Todos;