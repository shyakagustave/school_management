import './login.css';
import { useState } from "react";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault(); // Fixed missing parentheses for `preventDefault`
        console.log(email);
        Cookie.set('userEmail', email);
        navigate('/'); // Redirect to the home page
    };

    return (
        <>
            <div className='form-group'>
                <form onSubmit={login}> {/* Added `onSubmit` to the form */}
                    <label>Email</label><br />
                    <input 
                        type='email' 
                        name='email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    /><br /><br />

                    <label>Password</label><br />
                    <input 
                        type='password' 
                        name='password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    /><br /><br />

                    <button type='submit'>Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;