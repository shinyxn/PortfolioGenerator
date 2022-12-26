import React, {useState, useEffect} from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [ingfo, setIngfo] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async() => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response){
        navigate('/');
      }
    }
  }

  const axiosAuth = axios.create();

  axiosAuth.interceptors.request.use(async(config) => {
    const currentDate = new Date();
    if (expire * 1000 < currentDate.getTime()){
      const response = await axios.get('http://localhost:5000/token');
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  })

  const getUsers = async() => {
    const response = await axiosAuth.get('http://localhost:5000/users', {
      headers:{
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data);
    setIngfo(`Cookies aman, auto refresh_token dalam 15 detik --- Halo ${name}, ini adalah function untuk testing cookies`)
  }

  return (
    
    <div>
        <h1 className="container mt-5">Selamat datang, {name}</h1>
        <button onClick={getUsers} className='button is-info ml-5 mt-5'>Cek Cookies</button>
        <article className="message is-link mt-5 ml-5 mr-5">
        <div className="message-body">
        {ingfo}
        </div>
      </article>
      </div>
  )
}

export default Dashboard