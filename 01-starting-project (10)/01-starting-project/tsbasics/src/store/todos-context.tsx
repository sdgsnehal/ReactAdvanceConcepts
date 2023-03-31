import React, { useState } from "react";
type TodosContextObj = {
    
        items:Todo[];
        addTodo:()=>void;
        removeTodo:(id:string)=>void;
    
}
const TodosContext = React.createContext<TodosContextObj>({
    items:[],
    addTodo:()=>{},
    removeTodo:(id:string)=>{}
});
const TodosContextProvider:React.FC=(props)=>{
    useState()
    const [todos,setTodos]=useState<Todo[]>([]);
  
  const addTodoHandler =(todoText:string)=>{
    const newTodo =new Todo(todoText);
    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo);
    });
  }
  const removeTodoHandler=(todoId:string)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.id !==todoId);
    });

  };
  const contextVlaue:<>={
    items:todos,
    addTodo:addTodoHandler,
    removeTodo:removeTodoHandler

  }
    return <TodosContext.Provider value={contextVlaue}>
    {props.children}
    </TodosContext.Provider>
};
exports default TodosContext;