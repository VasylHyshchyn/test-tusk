import React from "react";
import './modal.css';

export const DeleteModal = ({active, setActive})  => {
    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modalContent" onClick={e => e.stopPropagation()}>

            </div>
        </div>
    )
}