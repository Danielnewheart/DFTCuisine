import Button from './Button';
import './Header.css';

import { useState, useEffect } from 'react';

function Header({ go, page, openMenu, setOpenMenu, isLoggedIn, username, logout }) {
    const [isScrolled, setIsScrolled] = useState(false);

    function toggleMenu() {
        setOpenMenu(!openMenu);
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > (window.innerHeight - 92));
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])

    const greetingMessage = (
        <div className='greeting'>
            <span className='greeting-message'>Hi, {username}</span>
        </div>

    )

    const logoutButton = (
        <Button visual='none' type='button' onClick={logout}>Logout</Button>
    )

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${page}`}>

            <div className="header-container">

                <div className="logo__container">
                    <a href="/home" className="home-link" onClick={(e) => go(e, "home")}>
                        <h1 className="logo-title">DFT Cuisine</h1>
                    </a>
                </div>
                <div className="menu__container">
                    {isLoggedIn && greetingMessage}
                    <button type="button" className="menu-button" onClick={toggleMenu} aria-label={openMenu ? "Close Menu" : "Open Menu"}>
                        {openMenu == false ? <i className="menu-icon gg-menu-left" /> : <i className="gg-close" />}
                    </button>

                    <nav className={`menu ${openMenu ? 'open' : ''}`}>
                        <ul className={`header-nav`}>
                            <li className={`header-nav__item`}>
                                <a className={`header-nav__link`} href="/recipes" onClick={(e) => go(e, "recipes")}>Recipes</a>
                            </li>
                            <li className={`header-nav__item`}>
                                <a className={`header-nav__link`} href="/table-talk" onClick={(e) => go(e, "newsletter")}>Subscribe</a>
                            </li>
                            <li className={`header-nav__item`}><a className={`header-nav__link`} href="/about-us" onClick={(e) => go(e, "about")}>About</a></li>
                        </ul>
                        {isLoggedIn && <Button visual='none' type='button' onClick={logout}>Logout</Button>}

                    </nav>
                </div>
            </div>


        </header>
    );
}
export default Header;