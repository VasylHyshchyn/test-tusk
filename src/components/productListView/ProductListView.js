import React, {useState} from "react";
import './productListView.css';
import { AddModal } from "./modals/addModal";
import { DeleteModal } from "./modals/deleteModal";




export const ProductListView = () => {

    const[modalActive, setModalActive] = useState(false);
    const[modalDeleteActive, setDeleteModalActive] = useState(false);

    return(
    <div className="wrapper">
        <div className="listView">
            <button type="button" className="add" onClick={() => setModalActive(true)}>Add</button>
            <button type="button" className="delete" onClick={() => setDeleteModalActive(true)}>Delete</button>
        </div>
        <AddModal active={modalActive} setActive={setModalActive}/>
        <DeleteModal active={modalDeleteActive} setActive={setDeleteModalActive} />
    </div>
    )
}

