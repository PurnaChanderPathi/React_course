import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Create() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    const history = useNavigate();

    const header = {"Access-Control-Allow-Origin":""};

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit button clicked");
        axios.post(
            'http://localhost:9192/customer/save',
            {name: name, email:email, mobile:mobile,
            header,
            }).then(()=>history("/read"));
            
    } 

    return <>
        <form onSubmit={handleSubmit}>
            <div className='d-flex justify-content-between m-2'>
            <h2>Create</h2>
            <Link to="/read">
            <button className='btn btn-primary'>Show Data</button>
            </Link>           
            </div>
            

            <div className="mb-3">
                <label className="form-label">name</label>
                <input type="text" className="form-control"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">mobile</label>
                <input type="number" className="form-control"
                    onChange={(e) => setMobile(e.target.value)}
                />
            </div>

            <Button type="submit" variant='contained' color='success' className="btn btn-primary"
            // onClick={handleSubmit}
            >
                Submit</Button>
        </form>
    </>

}

export default Create