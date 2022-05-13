import { useState } from "react";
import React from "react";
import "./form.css"

const initialValues = {
    title: "",
    desc: "",
    count: "",
    size: "",
    weight: ""
};


export const Form = () => {

    const reset = () => {
        setValues(initialValues)
    }

    const [values, setValues] = useState(initialValues)
    
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
    };


    return(
        <form onSubmit={handleSubmit} className="modalForm">
            <input placeholder="Type a title of product" value={values.title} onChange={handleInputChange} name="title"></input>
            <input placeholder="Type a desc of product" value={values.desc}  onChange={handleInputChange} name="desc"></input>
            <input placeholder="Type a count of product" value={values.count}  onChange={handleInputChange} name="count"></input>
            <input placeholder="Type a size of product" value={values.size}  onChange={handleInputChange} name="size"></input>
            <input placeholder="Type a weight of product" value={values.weight}  onChange={handleInputChange} name="weight"></input>
            <button >Add product</button>
            <button className="cancel">Cancel</button>
        </form>
    );
};