import { useState } from 'react';
import API from './api';

export default function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const response = await API.post('/clientes/login/', { username, password });
    setToken(response.data.access);
  };

  return (
    <div>
      <input placeholder='Usuario' onChange={e => setUsername(e.target.value)} />
      <input type='password' placeholder='Contraseña' onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Iniciar sesión</button>
    </div>
  );
}
