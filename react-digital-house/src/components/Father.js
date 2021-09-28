import React from 'react'
import Child from './Child'

const Father = (props) => {
    return (
        <div>
            <h3>{props.name} {props.lastName}</h3>
            <Child name="Nena" lastName={props.lastName} />
            <Child name="Xuinha Junior" lastName={props.lastName} />
        </div>
    )
}

export default Father