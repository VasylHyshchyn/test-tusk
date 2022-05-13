import React, {useState} from "react";
import { Form } from "../form/Form";
import { Modal } from "../modal/Modal";
import './productListView.css';

export const ProductListView = () => {

    const[modalActive, setModalActive] = useState(false);

    return(
    <div className="wrapper">
        <div className="listView">
            <button type="button" className="add" onClick={() => setModalActive(true)}>Add</button>
            <button type="button" className="delete" onClick={() => setModalActive(true)}>Delete</button>
            <Modal active={modalActive} setActive={setModalActive}>
            </Modal>
        </div>
    </div>
    )
}

