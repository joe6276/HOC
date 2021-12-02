import React, { Component } from 'react'
import UpdatedComponent from './Withcounter'

export class HocHover extends Component {
    render() {
        const {name ,count,incrementCount} = this.props

        return (
            <div>
                 
                 <button onMouseOver={incrementCount}>
                  {name} Hovered this Button { count} times
                 
                </button>
            </div>
        )
    }
}

export default UpdatedComponent( HocHover )
