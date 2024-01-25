import React from "react";

const TestComponent = (props) => {
    return (
    <div>
        <h3>Child Component</h3>
            <p>{props.message}</p>
            <p>Count in Child: {props.count}</p>
            <button onClick={props.onIncrement}>Increment Count</button>
            <button onClick={props.onReset}> Reset Count</button>
        
    </div> )
}

export default TestComponent;