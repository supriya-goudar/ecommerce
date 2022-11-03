

import { useState } from 'react';
import {signup, signin} from '../api/auth';




function Login() {
    
    const [showSignup, setShowSignup] = useState(false);
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [auth, setAuth] = useState('');


    const toggleSignup = () => {
        setShowSignup(!showSignup)
    }

    const signupHandler = async() => {
        const user = {username, password, email}; 
        try {
            const response = await signup(user); 
            console.log(response.data.message);
            setAuth(()=> response.data.message)
            
        }catch (error) {
            console.log(error);
        }
    }

    const siginHandler = async() => {
        const user ={ username, password}; 

        try {
            const response = await signin(user); 
            console.log(response); 
            window.location.href = '/'
        }catch (error) {
            console.log(error);
        }

    }


    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-info ">
            <div>
                <h1 className='text-white'>Welcome to Go-ecomm!</h1>
                <div className="card p-5 text-center">
                    <div className="card-title"><h4>{showSignup ? 'Sign Up' : 'Log In'} Here</h4> </div>
                    <div className="input-group m-1">
                        <input type="text" className='form-control' placeholder="Username" id="username" value={username} onChange={(e)=> setUsername(e.target.value)} />
                    </div>
                    <div className="input-group m-1">
                        <input type="password" className='form-control' placeholder="Password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                    </div>

                    {showSignup &&
                        <div className="input-group m-1">
                            <input type="email" className='form-control' placeholder="Email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                        </div>
                    }

                    <div className={showSignup ? 'btn btn-primary' : 'btn btn-danger'}>
                        <input type="submit" className=' btn btn-primary form-control' value={showSignup ? "Sign Up" : "Log In"} onClick={showSignup ? signupHandler : siginHandler} />
                    </div>

                    <div className='m-1' onClick={toggleSignup}>
                        <p className="lead text-primary">{showSignup ? "Already have an account? Log In" : "Don't have an account? Sign Up"}</p>
                    </div>
                    <div className='m-1' >
                        <p className="lead text-success">{auth ? auth : ''}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
