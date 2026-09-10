import React from 'react'
import { Link } from 'react-router/internal/react-server-client';

export default function Menu() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/contato">Contato</Link></li>
        </ul>
    </nav>
  );
}
