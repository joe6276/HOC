import React, { Component } from 'react'
import UpdatedComponent from './Withcounter'

export class Hocclick extends Component {
    
    render() {
        const {name ,count,incrementCount} = this.props
        return (
            <div>
                 <button onClick={incrementCount}>
                 {name}clicked this Button { count} times   
                 
                 
                </button>
            </div>
        )
    }
}

export default UpdatedComponent( Hocclick )
