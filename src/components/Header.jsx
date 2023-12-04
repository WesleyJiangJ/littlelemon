import Nav from './Nav'
import Logo from '../assets/Logo.svg'

export default function Header() {
    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <Nav />
        </header>
    );
}