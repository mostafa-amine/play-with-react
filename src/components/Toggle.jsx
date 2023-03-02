
import { useState } from "react"

function Toggle()
{

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)

    
    const submit = (e) => {
        e.preventDefault()
        
    }


    return (
        <div>
            <form onSubmit={submit}>
                <input value={name} onChange={(event) => {setName(event.target.value)}} className="form-control" placeholder="Nom" type="text" />
                <input value={age} onChange={(event) => {setAge(event.target.value)}} className="form-control my-3" placeholder="Age" type="number" />

                <button className="btn btn-secondary" type="submit">Ok</button>
            </form>
            

            <div className="mt-5">
                Your name is {userName} {userAge}        
            </div>
        </div>

        
    )

}


export default Toggle