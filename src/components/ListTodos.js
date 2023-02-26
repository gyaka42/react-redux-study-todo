import React from "react";
import { useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

const ListTodos=() =>{
    const storeState=useSelector((state)=>state)
    const activeTodos=storeState.todosState.filter(item=>item.active===true)
    return(
        <div>
            {
                activeTodos.length === 0 ? (
                    <p>There is no todos yet !</p>
                ) : (<>
                {
                    activeTodos.map((item,index) => (
                        <SingleTodo todo={item} key={index} />
                    ))
                }
                </>
                )
            }
        </div>
    )
}

export default ListTodos