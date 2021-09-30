import React, { useState, useEffect } from 'react'
import pokeApi from '../services/pokesApi'
import { Link } from 'react-router-dom'

const Pokes = () => {
    
    const [pokes, setPokes] = useState([])
    
    useEffect(async () => {
        let response = await pokeApi.get()
        setPokes(response.data.results)
    }, [])

    const renderPokes = () => {
        return pokes.map(poke => (
            <div>
                <Link to={`/pokes/${poke.name}`}>{poke.name}</Link>
            </div>
        ))
    }

    return (
        <>
            {!pokes.length ? 'Loading...' : 
                renderPokes()
            }
        </>
    )

}

export default Pokes