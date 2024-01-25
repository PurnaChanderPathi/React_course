import React, {useState} from 'react'

function Signup() {
    const [data, setData] = useState(
        {
            username:'',
            email:'',
            password:'',
            confirmPassword:'',
        }
    );
    const {username, email, password, confirmPassword} =data;

    const onChange = e => {
        setData({...data, [e.target.name]:e.target.value})
    }

    const onSubmit = e =>
    {
        e.preventDefault();
        if(username.length <= 5)
        {
        alert("Username must be atlest 5 characters ");
        } else if (password !== confirmPassword){ 
            alert("passwords are  not matching");
        }else{
            console.log(data);
        }
    }

  return (
    <div>
        <center>
            <form onSubmit={onSubmit}>
                <input type='text' name='username' value={username} onChange={onChange} placeholder='Username' /><br />
                <input type='email' name='email' value={email} onChange={onChange} placeholder='Email' /> <br />
                <input type='password' name='password' value={password} onChange={onChange} placeholder='Password'/> <br />
                <input type='password'  name='confirmPassword' value={confirmPassword} onChange={onChange} placeholder='Confirm Passoword'/> <br />
                {password !== confirmPassword ?<p style={{"color":"red"}}>password not matching</p>:null}
                <input type='submit' name='submit' />
            </form>
        </center>
    </div>
  )
}

export default Signup