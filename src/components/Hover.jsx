import React, { Component } from 'react'


export class Hover extends Component {
    constructor(props){
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    
    incrementCount=()=>{
        this.setState(prevState=>{
            return{count: prevState.count + 1}
        })
    }

    render() {
        const {count} =this.state
        return (
            <div>
                 <button onMouseOver={this.incrementCount}>
                  {this.props.name} You Hovered this Button { count} times
                 
                
                 
                </button>
              
            </div>
        )
    }
}

export default  Hover;


