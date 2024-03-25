import { useState, useEffect } from 'react'

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Recipes from './Recipes';
import Newsletter from './Newsletter';
import AboutUs from './AboutUs';
import RecipeCard from './RecipeCard';
import PrivacyPolicy from './PrivacyPolicy';

import galleryData from './galleryData';

import './App.css'

function App() {
  const [page, setPage] = useState('home');
  const [openMenu, setOpenMenu] = useState(false);
  const [filterTag, setFilterTag] = useState('all');

  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function onLogin(username) {
    setUsername(username);
    setIsLoggedIn(true);
  };

  function logout() {
    setUsername('');
    setIsLoggedIn(false);
  }

  function go(e, page, filterTag = "all") {
    e.preventDefault();
    setPage(page);
    setOpenMenu(false);
    setFilterTag(filterTag);
  }

  return (
    <>
      <a className='skiplink' href="#main">Skip to content</a>
      <Header
        go={go}
        page={page}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        isLoggedIn={isLoggedIn}
        username={username}
        logout={logout}
      />

      <main id="main">
        {page === 'home' && <Home go={go} />}
        {page === 'recipes' && <Recipes go={go} filterTag={filterTag} setFilterTag={setFilterTag} />}
        {page === 'newsletter' && <Newsletter isLoggedIn={isLoggedIn} onLogin={onLogin} />}
        {page === 'about' && <AboutUs />}
        {galleryData.map((item) => (
          page === item.title && <RecipeCard key={item.title} item={item} go={go} />
        ))}
        {page === 'privacy-policy' && <PrivacyPolicy />}
      </main>

      <Footer go={go} />
    </>
  );
}

export default App;
