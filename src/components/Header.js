import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Header = () =>{
    const dispatch=useDispatch()
    const storeStates=useSelector((state)=>state)
    const allActives=storeStates.todosState.filter(item=>item.active===true)
    const doneTodos=allActives.filter(item => item.isDone === true)
    const allPassives=storeStates.todosState.filter(item=>item.active===false)

    return(
        <div>
            <h1>React-Redux Todo App!</h1>
            <button onClick={()=>dispatch({type:"DELETE_ALL"})}>Delete All Todos</button>
                {allPassives.length !== 0 && (<button onClick={()=>dispatch({type:"RESTORE_DELETE"})}>Restore deleted todos</button>)}
            
            <p>Aslinda dizide var olan toplam sayi: {storeStates.todosState.length}</p>
            <p>Toplam Aktif Eleman Sayisi: {allActives.length} </p>
            <p>Aktifler icerisinden Yapilanlarin Sayisi: {doneTodos.length} </p>
            <p>Akrifler icerisinden Henuz Yapilmamislarin Sayisi: {allActives.length - doneTodos.length} </p>
        </div>
    )
}

export default Header