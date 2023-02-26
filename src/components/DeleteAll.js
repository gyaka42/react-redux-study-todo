import React, {useState} from "react";
import { useDispatch } from "react-redux";
import DeleteAllModal from "./DeleteAllModal";

const DeleteAll =()=>{
    const dispatch=useDispatch()
    const [openModal,setOpenModal]=useState(false)
    return(
        <div>
            <button onClick={()=>setOpenModal(true)} style={{position: "absolute", bottom: "10px", right: "10px"}}>Delete Permenantly</button>
            <DeleteAllModal visible={openModal} onCancel={()=>setOpenModal(false)} onConfirm={()=>{
                dispatch({type:"PERMANENTLY_DELETE"})
                setOpenModal(false)
            }} />
        </div>
    )
}

export default DeleteAll