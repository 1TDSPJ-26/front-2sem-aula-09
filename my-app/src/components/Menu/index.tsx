import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <nav>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/produtos'>Produtos</Link></li>
      <li><Link to='/editar-produtos'>Editar Produtos</Link></li>
    </nav>
  );
}


    