import { Link } from 'react-router'

export default function Menu() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/produto/:id">Detalhe dos produtos</Link></li>
                <li><Link to="/lampada">Lâmpada</Link></li>
            </ul>
        </nav>
    )
}