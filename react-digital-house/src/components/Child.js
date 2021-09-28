import React from 'react'

const Child = ({ name, lastName }) => {
    return (
        <div>
            <h5>{name} {lastName}</h5>
        </div>
    )
}

export default Child