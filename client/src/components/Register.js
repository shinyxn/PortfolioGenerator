import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPass, setconfPass] = useState('');
    const [msg, setMsg] = useState('');
    const [succmsg, setSucc] = useState('');
    const navigate = useNavigate();

    const Register = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPass
            });
            if(msg) setMsg('');
            setSucc('Registrasi Berhasil! Mengarahkanmu ke halaman login dalam waktu 5 detik');
            setTimeout(() => {
            navigate('/');
            }, 5000);
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }

  return (
   <section className="hero has-background-grey-light is-fullheight is-fullwidth">
     <div className="hero-body">
       <div className="container">
        <div className="columns is-centered">
            <div className="column is-4-desktop">
                <form onSubmit={ Register } className='box'>
                <article className="message is-link">
                <div className="message-body">
                    <p>Silahkan register dahulu coy.</p>Ngetes component notif <strong>BulmaCSS</strong> keren juga
                </div>
                </article>
                    <div className="field mt-5">
                        <label className="label">Name</label>
                        <div className="controls">
                            <input type="text" className="input" placeholder='cont. Arisu Tendou' value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Email</label>
                        <div className="controls">
                            <input type="text" className="input" placeholder='arisu@yahoo.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Password</label>
                        <div className="controls">
                            <input type="password" className="input" placeholder='*******' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Confirm Password</label>
                        <div className="controls">
                            <input type="password" className="input" placeholder='*******' value={confPass} onChange={(e) => setconfPass(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <button className="button is-success is-fullwidth">Register</button>
                    </div>
                     <p className="has-text-centered has-text-danger">{msg}</p>
                     <p className="has-text-centered has-text-success">{succmsg}</p>
                </form>
            </div>
        </div>
       </div>
     </div>
   </section>
  )
}

export default Register