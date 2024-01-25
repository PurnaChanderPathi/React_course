import React, {useState} from "react";
import TestComponent from "./TestComponent";

const Test = () => {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const resetCount = () => {
        setCount(0);
    };

    const parentMessage = "Hello from parents";

    return(
        <div>
            <h2>Parent Component</h2>
            <p>Count: {count}</p>

            <TestComponent 
            message ={parentMessage} 
            count = {count}
            onIncrement = {incrementCount}
            onReset = {resetCount} />
        </div>

    );
}


export default Test;



// const Test = () => {
//     // const name = "eidiko";
//     const [content,setContent] = useState("welcome to eidiko");

//     return (
//         <div>
//             <TestComponent name={content}/>
//         </div>
//     )

// }