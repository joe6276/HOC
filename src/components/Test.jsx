import React from 'react'

export default function Test() {
    
    function twice(f, v) {
        return f + v
        }

    function add3(v){
        return v + 3
    }
    const result = twice(add3(4), 1);
    console.log("Result is ", result);


    return (
        <div>
                {result}
        </div>
    )
}
