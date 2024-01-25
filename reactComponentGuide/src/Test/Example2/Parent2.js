import React, {useState, useEffect} from 'react'

function Parent2() {

    const [count, setCount] = useState(0);
    useEffect(() => console.log(count),[count]);

    const CountINC = () => {
        setCount(prevCount => prevCount+1);
    }

    const CountDEC = () => {
      setCount(prevCount => prevCount-1);
    }

  return (
    <div>
        <p>you Click {count} times</p>
        <button onClick={CountINC}>Increment</button>
        <button onClick={CountDEC}>Decrement</button>
    </div>
  )
}

export default Parent2