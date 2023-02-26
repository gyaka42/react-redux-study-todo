import React, {useState} from "react";
import { useDispatch } from "react-redux";

const SingleTodo =({todo})=>{
    const [willEdit,setWillEdit]=useState(false)
    const [updateText, setUpdateText]=useState(todo.text)
    const dispatch=useDispatch()
    const deleteTodo=()=>{
        dispatch({type: "DELETE_TODO", payload:todo.id})
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        /* Validation */
        if(updateText===""){
            alert("Todo text cant be empty")
        return
        }
        dispatch({type:"EDIT_TODO", payload: {...todo,text:updateText}})
        setWillEdit(false)
    }
    return(
        <div>
            <h1 style={{textDecoration: todo.isDone === true ? "line-through": "none",
                        color: todo.isDone === true ? "red":"black"}}>{todo.text}</h1>
            {
                willEdit === true && (
                    <form onSubmit={handleSubmit}>
                        <input value={updateText} onChange={(event)=>setUpdateText(event.target.value)} placeholder="type your todo" />
                        <button onClick={()=>{
                            setWillEdit(false)
                            setUpdateText(todo.text)
                        }} type="button">Cancel</button>
                        <button type="submit">Save</button>
                    </form>
                )}
                <button onClick={()=>dispatch({type: "ISDONE_TODO",payload:todo.id})}>{todo.isDone == true ? "yapilmadi":"yapildi"}</button>
            <button onClick={deleteTodo}>Delete</button>
            <button onClick={()=>setWillEdit(true)}>Update</button>
            <hr />

        </div>
    )
}

export default SingleTodo