import React, { useState, useEffect } from 'react'
import pokeApi from '../services/pokesApi'
import { useParams } from 'react-router-dom'

const Poke = () => {
    let { poke } = useParams();
    const [pokeDetail, setPokeDetail] = useState({})
    
    useEffect(async () => {
        const response = await pokeApi.get(`/${poke}`)
        setPokeDetail(response.data)
        console.log(response.data)
    }, [])

    return (
        <>
            {!pokeDetail.sprites ? 'Loading' :  
                <div>
                    <img src={pokeDetail.sprites.back_default} />
                    <div>{pokeDetail.name}</div>
                </div>
            }
        </>
    )

}

export default Poke