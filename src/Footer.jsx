import './Footer.css'

function Footer({ go }) {

    return (
        <footer className="footer">
            <ul className="footer-nav">
                <li className="footer-nav_item"><a className="footer-nav_link" href="./privacy-polocy" onClick={(e) => go(e, 'privacy-policy')}>Privacy Policy</a></li>
                <li className="footer-nav_item"><a className="footer-nav_link" href="https://www.instagram.com/daniel_newheart/">Instagram</a></li>
                <li className="footer-nav_item"><a className="footer-nav_link" href="https://www.facebook.com/daniel.kao.50/">Facebook</a></li>
                <li className="footer-nav_item"><a className="footer-nav_link" href="https://twitter.com/daniel_newheart">Twitter</a></li>
            </ul>
        </footer>
    );
}

export default Footer;