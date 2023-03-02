import { useState } from "react";
import { useRef } from "react";


function Form()
{

    const txtTitle = useRef()
    const hexColor = useRef()
    const submit = (e) => {
        e.preventDefault()
        const title = txtTitle.current.value
        const Color = hexColor.current.value
        alert(`${title} = ${Color}`)
        txtTitle.current.value = ""
        hexColor.current.value = "#000000"
    } 
    return (
        
        <div className="Form" onSubmit={submit}>
            <h1 className="text-center">With UseRef</h1>
            <form >
                <input ref={txtTitle} type="text" className="form-control" placeholder="Color ..."/>
                <br />
                <input ref={hexColor} type="color" className="form-control"/>
                <br />
                <button className="btn btn-success">Add</button>
            </form>
        </div>
    )
}

export default Form;