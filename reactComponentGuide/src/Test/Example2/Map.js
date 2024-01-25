import React from 'react'

function Map() {
    // const arr =["react js", "node js", "Express js", "Angular js"];
    const arr = [
        {
            id: 1,
            title: "React js"
        },
        {
            id:2,
            title: "Node js"
        },
        {
            id:3,
            title: "Express js"
        },
        {
            id:4,
            title: "Angular js"
        }

    ];
  return (
    <div>
        {
            arr.map(
                // (value,index) => <li key={index}>{value}</li>
                (value) => <li key={value.id}>{value.title}</li>
            )
        }
    </div>
  )
}

export default Map