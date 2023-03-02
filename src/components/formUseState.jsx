import { useState } from "react"


function FormUseState()
{
    const [title, setTitle] = useState("")
    const [color, setColor] = useState("#000000")
    const submit = (e) => {
        e.preventDefault()
        alert(`${title} - ${color}`)
        setTitle("")
        setColor("")
    } 
    
    return (
        <div className="Form mt-5 ">
            <h1 className="text-center">With UseState</h1>
            <form onSubmit={submit}>
                <input value={title} type="text" onChange={(event) => setTitle(event.target.value)} className="form-control" placeholder="Color ..."/>
                <br />
                <input value={color} type="color" onChange={(event) => setColor(event.target.value)} className="form-control"/>
                <br />
                <button className="btn btn-success">Add</button>
            </form>
        </div>
    )
}

export default FormUseState;