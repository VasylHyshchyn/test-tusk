
import { Form } from '../form/Form';
import './modal.css';
import { useState } from 'react';



export const Modal = ({active, setActive})  => {

    const[modalActive, setModalActive] = useState(false);
    
    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modalContent" onClick={e => e.stopPropagation()}>
                <Form active={modalActive} setActive={setModalActive}/>
            </div>
        </div>
    )
}