import { Link } from 'react-router-dom'
export default function Navigation() {
    return (
        <nav className='nav'>
            <ul className='list'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/pricing'}>Pricing</Link></li>
                <li><Link to={'/contacts'}>Contacts</Link></li>
                <li><Link to={'/starships'}>StarShips</Link></li>
            </ul>
        </nav>

    )
}