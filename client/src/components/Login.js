import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    useEffect(() => {
        document.title = 'Login | PortofolioGenerator';
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const AuthLogin = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password,
            });
            navigate('/dashboard');
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }

  return (
   <section className="hero has-background-grey-light is-fullheight is-fullwidth">
     <div className="hero-body">
       <div className="container">
        <div className="columns is-centered">
            <div className="column is-4-desktop">
                <form onSubmit={AuthLogin} className='box'>
                <p>Belum punya akun? <a href="/register" className="href">Register disini</a></p>
                    <div className="field mt-5">
                        <label className="label">E-mail</label>
                        <div className="controls">
                            <input type="text" className="input" placeholder='cont. arisu@yahoo.com' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Password</label>
                        <div className="controls">
                            <input type="password" className="input" placeholder='*******' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <button className="button is-success is-fullwidth">Login</button>
                    </div>
                    <p className="has-text-centered has-text-danger">{msg}</p>
                </form>
            </div>
        </div>
       </div>
     </div>
   </section>
  )
}

export default Login