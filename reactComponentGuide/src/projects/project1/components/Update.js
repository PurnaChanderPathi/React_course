import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Update() {
  
    const [id,setId] = useState('');
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [mobile,setMobile] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setMobile(localStorage.getItem("mobile"));
    },[]);

        const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:9192/customer/${id}`,
        {
            name: name,
            email: email,
            mobile: mobile,
        }
        ).then(()=>{
            navigate("/read");
        })
        .catch(error => {
            console.error('Error updating:', error);
        });
   };


    return (
        <>
            <form>
                <h2>Update</h2>

                <div className="mb-3">
                    <label className="form-label">name</label>
                    <input type="text" className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">mobile</label>
                    <input type="number" className="form-control"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    />
                </div>

                <button type="submit" 
                className="btn btn-primary mx-2"
                 onClick={handleUpdate}>Update</button>
                <Link to="/read">
                <button className="btn btn-secondary mx-2">Back</button>
                </Link>
                    
            </form>
        </>
    )
}

export default Update