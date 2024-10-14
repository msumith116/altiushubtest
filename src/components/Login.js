import React from 'react';
import { useState } from 'react';
import { auth } from './Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';
function Login() {
    let [user, setuser] = useState();
    let [email, setemail] = useState();
    let [pass, setpass] = useState();
    let [login, setlogin] = useState(false);
    const handleuser = (e) => {
        setemail(e.target.value);
    }
    const handlepass = (e) => {
        setpass(e.target.value);
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const cuser = await signInWithEmailAndPassword(auth, email, pass);
            console.log(cuser.user);
            setlogin(true);
            setuser(cuser.user.email);
        }
        catch {
            console.log("error while Logging");
        }

    }

    return (
        <div>
            {!login ? (
                <div>
                    <div className='form-container'>
                        <form className='iform' onSubmit={handlesubmit}>
                            <label htmlFor="user" className='l1'>Email</label>
                            <div className='inputs'>
                                <input type='email' className='email' id="user" placeholder='Email..' onChange={handleuser} />
                            </div>
                            <label htmlFor='pass' className='l1'>Password</label>
                            <div className='inputs'>
                                <input type='password' className='password' id='pass' placeholder='Password..' onChange={handlepass} />
                            </div>
                            <button type='submit' className='bt'>Login</button>
                        </form>
                        <p>Register<a href='./Register' alt='/'> Here</a></p>
                    </div>
                </div>
            ) : <div>
                <h2>Hi,{user}</h2>
            </div>
            }
        </div>
    )
}

export default Login;