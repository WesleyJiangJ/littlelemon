import Logo from '../assets/Logo.svg'

export default function Footer() {
    return (
        <footer>
            <div className="footer-logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="navigation">
                <h5>Navigation</h5>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Reservations</a></li>
                    <li><a href="">Order Online</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </div>

            <div className="contact">
                <h5>Contact</h5>
                <ul>
                    <li><a href="">Address</a></li>
                    <li><a href="">Phone Number</a></li>
                    <li><a href="">Email</a></li>
                </ul>
            </div>

            <div className="social-networks">
                <h5>Social</h5>
                <ul>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Pinterest</a></li>
                    <li><a href="">LinkeIn</a></li>
                </ul>
            </div>
        </footer>
    );
}