import { useState } from "react"

function Count()
{
    const [list, deleteList] = useState([1,2,3,4,5,6]) 

    
    return (

        <div className="Count">
            {list.map((item, id) => 
            <div key={id
            }>
                <h1 key={id}>
                {item} {id}
                <button key={id} className="btn btn-success" onClick={
                    () => deleteList(list.splice(id))
                    }>-</button>
                </h1>
            </div>    
            )}
        </div>
    )
}

export default Count;