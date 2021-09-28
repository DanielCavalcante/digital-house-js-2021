import React, { Component } from 'react'

class StateFul extends Component {

    constructor() {
        super()
        this.state = {
            text: 'Xuxinha'
        }
    }

    render() {
        return (
            <div onClick={() => this.setState({ text: 'Xuxinha Souza' })}>
              {this.state.text}
            </div>
        )
    }
}

export default StateFul