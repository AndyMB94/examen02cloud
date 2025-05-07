import { useEffect, useState } from 'react';
import API from './api';

export default function Clientes({ token, setVista, setToken }) {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    API.get('/clientes/', {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setClientes(res.data));
  }, []);

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <ul>
        {clientes.map(c => (
          <li key={c.id}>{c.nombre} - {c.email}</li>
        ))}
      </ul>
      <button onClick={() => setVista('productos')}>Ver productos</button>
      <br />
      <button onClick={() => setToken('')}>Cerrar sesión</button>
    </div>
  );
}
