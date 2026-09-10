import { Link } from 'react-router'

export default function Menu() {
    return ( 
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/produtos">Produto</Link></li>
            </ul>
        </nav>
    )
}