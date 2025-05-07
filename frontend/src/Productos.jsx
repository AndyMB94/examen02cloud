import { useState, useEffect } from 'react';
import API from './api';

export default function Productos({ token, setToken, setVista }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    API.get('/productos/', {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setProductos(res.data));
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map(p => (
          <li key={p.id}>{p.nombre} - S/ {p.precio}</li>
        ))}
      </ul>
      <button onClick={() => setVista('clientes')}>Volver a clientes</button>
      <br />
      <button onClick={() => setToken('')}>Cerrar sesión</button>
    </div>
  );
}
