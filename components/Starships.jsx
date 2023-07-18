import { useState } from 'react'

export default function Starships ({ data }) {

    const [display, setDisplay] = useState(false)
    const [buttonId, setButtonID] = useState(0)

    function handleClick(event){

        setDisplay((previousState) => (!previousState))
    
    }

    return (
        <div className='box'>
        {data.map((ship, index)=> (
            <div className='starship' key={ship.name}>
                <button key={ship.name} onClick={(event) => handleClick(event)}>
                    {ship.name}
                </button>
                {display && true ? <h2>crew: {ship.crew}</h2> : null}
            </div>
          ))}
        </div>
    )
    
}

