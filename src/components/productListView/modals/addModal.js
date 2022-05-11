import React, { useState } from "react";
import './modal.css';




export const AddModal = ({active, setActive})  => {

    const[title, setTitle] = useState('');
    const[desc, setDesc] = useState('');
    const[count, setCount] = useState('');
    const[size, setSize] = useState('');
    const[weight, setWeight] = useState('');
    
    const titleHandler = (e) => {
        setTitle(e.target.value);
    };
    
    const descHandler = (e) => {
        setDesc(e.target.value);
    };

    const countHandler = (e) => {
        setCount(e.target.value);
    };

    const sizeHandler = (e) => {
        setSize(e.target.value);
    };

    const weightHandler = (e) => {
        setWeight(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
    };


    function createProduct(title, desc, count, size, weight){
        function ProductConstructor(title, desc, count, size, weight){
            this.title = title;
            this.desc = desc;
            this.count = count;
            this.size = size;
            this.weight = weight;
            };
            
    
        let product = new ProductConstructor(title, desc, count, size, weight);
        return product
        };

    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modalContent" onClick={e => e.stopPropagation()}>
                <form onSubmit={handleSubmit}>
                    <h1>Adding product</h1>
                    <input onChange={e => titleHandler(e)} value={title} name="title"></input>
                    <input onChange={e => descHandler(e)} value={desc} name="desc"></input>
                    <input onChange={e => countHandler(e)} value={count} name="count"></input>
                    <input onChange={e => sizeHandler(e)} value={size} name="size"></input>
                    <input onChange={e => weightHandler(e)} value={weight} name="weight"></input>
                    <button onClick={() => createProduct(title, desc, count, size, weight)}>Add product</button>
                </form>
            </div>
        </div>
    )
}