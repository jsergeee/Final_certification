import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ isAuthenticated, setIsAuthenticated, pageTitle = "HOME" }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        navigate('/');
      }
    } catch (error) {
      console.error('Ошибка выхода:', error);
    }
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img src="/icon/Group2.png" alt="logo" />
          </Link>
          <button className="header__search">
            <img src="/icon/Forma1.svg" alt="Search" />
          </button>
        </div>
        
        <div className="header__nav nav">
          <details className="nav__link">
            <summary className="nav__link_menu">
              <img src="/icon/Forma1(2).svg" alt="Menu" />
            </summary>
            <div className="nav__link_menu_content">
              <section style={{ margin: "24px" }}>MENU</section>
              
              <details className="nav__link_menu_content_item">
                <summary className="nav__link_menu_content_category">
                  MAN
                </summary>
                <ul>
                  <li><Link to="/catalog/man/accessories" className="category_list">Accessories</Link></li>
                  <li><Link to="/catalog/man/bags" className="category_list">Bags</Link></li>
                  <li><Link to="/catalog/man/denim" className="category_list">Denim</Link></li>
                  <li><Link to="/catalog/man/t-shirts" className="category_list">T-Shirts</Link></li>
                </ul>
              </details>

              <details className="nav__link_menu_content_item">
                <summary className="nav__link_menu_content_category">
                  WOMAN
                </summary>
                <ul>
                  <li><Link to="/catalog/woman/accessories" className="category_list">Accessories</Link></li>
                  <li><Link to="/catalog/woman/jackets" className="category_list">Jackets & Coats</Link></li>
                  <li><Link to="/catalog/woman/polos" className="category_list">Polos</Link></li>
                  <li><Link to="/catalog/woman/t-shirts" className="category_list">T-Shirts</Link></li>
                </ul>
              </details>

              <details className="nav__link_menu_content_item">
                <summary className="nav__link_menu_content_category">
                  KIDS
                </summary>
                <ul>
                  <li><Link to="/catalog/kids/accessories" className="category_list">Accessories</Link></li>
                  <li><Link to="/catalog/kids/jackets" className="category_list">Jackets & Coats</Link></li>
                  <li><Link to="/catalog/kids/t-shirts" className="category_list">T-Shirts</Link></li>
                </ul>
              </details>
            </div>
          </details>

          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="nav__link_account">
                <img src="/icon/user-auth.svg" alt="Account" />
              </Link>
              <button onClick={handleLogout} className="nav__link_logout">
                <img src="/icon/logout.svg" alt="Logout" />
              </button>
            </>
          ) : (
            <Link to="/login" className="nav__link_account">
              <img src="/icon/Forma1(1).svg" alt="Login" />
            </Link>
          )}

          <Link to="/cart" className="nav__link_cart">
            <img src="/icon/Forma1(3).svg" alt="Cart" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;