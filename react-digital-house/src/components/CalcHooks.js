import React, { useState, useEffect } from 'react'

const CalcHooks = () => {
    
    const [number, setNumber] = useState(0)
    const [showNumber, setShowNumber] = useState(false)
    const [pokes, setPokes] = useState(['Pikachu'])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setPokes(res)
        }
        )
        .catch(err => console.log(err))

    }, [])

    return (
        <>
            
            <button onClick={() => setNumber(number + 1)}>
                Click to increment by 1
            </button>
            <button onClick={() => setNumber(number - 1)}>
                Click to decrease by 1
            </button>
            <button onClick={() => setShowNumber(!showNumber)}>
            { showNumber ? 'Hide number' : 'Show number' }
            </button>
            { showNumber ? <h2>{ number }</h2> : '' }
        </>
    )

}

export default CalcHooks