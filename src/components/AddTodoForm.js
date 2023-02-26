import React, {useState} from "react";
import { useDispatch } from "react-redux";

const AddTodoForm = () =>{
    const dispatch=useDispatch()
    const [todoText,setTodoText]=useState("")
    const handleSubmit =(event)=>{
        event.preventDefault()
        if(todoText===""){
        alert("todo Text is required")
        return
    }
    const newTodo={
        id: String(new Date().getTime()),
        text: todoText,
        date: new Date(),
        isDone: false,
        active: true,
    }
    dispatch({type:"ADD_TODO", payload: newTodo})
    setTodoText("")
}

    return(
        <form onSubmit={handleSubmit}>
            <input value={todoText} onChange={(event) => setTodoText(event.target.value)} placeholder="Type your todo" />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodoForm