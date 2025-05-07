import { useState, useEffect } from 'react';
import Login from './Login';
import Clientes from './Clientes';
import Productos from './Productos';

export default function App() {
  const [token, setToken] = useState('');
  const [vista, setVista] = useState('clientes');

  useEffect(() => {
    const listener = (e) => setVista(e.detail);
    window.addEventListener("cambiarVista", listener);
    return () => window.removeEventListener("cambiarVista", listener);
  }, []);

  if (!token) return <Login setToken={setToken} />;
  if (vista === 'productos') return <Productos token={token} setToken={setToken} setVista={setVista} />;
  return <Clientes token={token} setToken={setToken} setVista={setVista} />;
}
