import React, { useState, useEffect } from 'react';
import './Header.css'; // Import the CSS file that contains your styles
import { Link } from 'react-router-dom';

const Header = () => {
  const [title] = useState('My Header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const sourceButtons = [
    { label: 'Twitter', url: 'https://twitter.com/jinseicorp' },
    { label: 'GitHub', url: 'https://github.com/jinsei-ai/' },
    { label: 'White-Paper', url: 'https://docs.google.com/document/d/1m_ZNJheDIbt9JHsljOIoZ6awDcaWswWgvlRDGKK3vSE/edit?usp=sharing' },
    { label: 'Deck', url: 'https://drive.google.com/file/d/1JrjXCzGImy7K36S9duByjM5D7a4xpgCq/view?usp=sharing' },
    { label: 'Timeline', url: 'https://jinsei.ai/timeline' },
    { label: 'Privacy', url: 'https://jinsei.ai/privacy' },
    { label: 'TermsOfService', url: 'https://jinsei.ai/tos' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
    if (window.scrollY > 140) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
  };

  useEffect(() => {
    const handleNavigation = () => {
      closeMenu();
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  return (
    <div className={`header ${isHeaderVisible ? '' : 'hidden'}`}>
      <div className="header">
        <div className="title">
        <Link to="/" className="title">
        <h1>jinsei.ai</h1>
        </Link>
        </div>
        <div className="menu-button" onClick={toggleMenu}>
          ☰
        </div>
      </div>
      <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
        <span className="close-button" onClick={closeMenu}>
          ✕
        </span>
        {sourceButtons.map((button) => (
          <a
            href={button.url}
            onClick={closeMenu}
            className="button"
            target="_blank"
            key={button.label}
          >
            {button.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
