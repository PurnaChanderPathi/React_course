import axios from 'axios';
import React, {useEffect,useState} from 'react'

function Sample() {

    const [data, setData] = useState([]);
    
    useEffect(() => {
    axios.get('http://localhost:9192/customer/all')
    .then(Response => setData(Response.data))
    },[])
  return (
    <div>
        {
            data.map(item => <li key={item.id}>{item.mobile}</li>)
        }
        
    </div>
  )
}

export default Sample