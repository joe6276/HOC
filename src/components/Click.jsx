import React, { Component } from 'react'


export class click extends Component {
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

        const {count } = this.state
        return (
            <div>
                 <button onClick={this.incrementCount}>
                  {this.props.name} You Clicked  this Button { count} times
                 
                </button>
            </div>
        )
    }
}

export default  click 

