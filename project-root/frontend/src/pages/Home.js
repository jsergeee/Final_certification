import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ onAddToCart }) => {
  const exampleProducts = [
    {
      id: 1,
      title: "ELLERY X M'O CAPSULE",
      description:
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
      price: 52.0,
      image: '/image/11.jpg',
      color: "RED",
      size: "XL",
    },
    {
      id: 2,
      title: "ELLERY X M'O CAPSULE",
      description:
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
      price: 52.0,
      image: '/image/12.jpg',
      color: "RED",
      size: "XL",
    },
    
    {
      id: 3,
      title: "ELLERY X M'O CAPSULE",
      description:
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
      price: 52.0,
      image: '/image/13.jpg',
      color: "RED",
      size: "XL",
    },
    {
      id: 4,
      title: "ELLERY X M'O CAPSULE",
      description:
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
      price: 52.0,
      image: '/image/14.jpg',
      color: "RED",
      size: "XL",
      
    },

    {
      id: 5,
      title: "ELLERY X M'O CAPSULE",
      description:
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
      price: 52.0,
      image: '/image/15.png',
      color: "RED",
      size: "XL",
    },
    {
      id: 6,
      title: "ELLERY X M'O CAPSULE",
      description:
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
      price: 52.0,
      image: '/image/16.jpg',
      color: "RED",
      size: "XL",
    },

  ];

  return (
    <div className='Home'>
            <div className='top-head'>
        <div className='top-head_navigation'>
          <h2 className='top-head__heading'>HOME</h2>
          <nav className='bread_crumbs'>
            <Link
              to='/'
              className='bread_crambs__link'
              style={{ color: '#f16d7f' }}
            >
              HOME
            </Link>
            <Link to='/catalog' className='bread_crambs__link'>
              CATALOG
            </Link>
            <Link
              to='/cart'
              className='bread_crambs__link_site'
              style={{ color: '#636363' }}
            >
              CART
            </Link>
          </nav>
        </div>
      </div>
      <div className='Hero'>
        <div className='hero'>
          <div className='img_hero'></div>

          <div className='text_hero'>
            <h1 style={{ marginLeft: '8px', flexwrap: 'nowrap' }}>THE BRAND</h1>

            <p
              style={{
                marginLeft: '10px',
                display: 'inline',
                whiteSpace: 'nowrap',
              }}
            >
              OF LUXERIOUS
            </p>
            <p
              style={{
                color: 'rgb(241, 109, 127)',
                display: 'inline',
                marginLeft: '10px',
                whitespace: 'nowrap',
              }}
            >
              FASHION
            </p>
          </div>
        </div>
      </div>
      <div className='dody-cont'>
        <div className='offer'>
          <div className='offer_item1'>
            <p className='text_ofer' style={{ color: 'white' }}>
              30% OFF
            </p>
            <p style={{ color: ' #F16D7F' }}>FOR WOMEN</p>
          </div>

          <div className='offer_item2'>
            <p className='text_ofer' style={{ color: 'white' }}>
              HOT DEAL
            </p>
            <p style={{ color: ' #F16D7F' }}>FOR MEN</p>
          </div>
          <div className='offer_item3'>
            <p className='text_ofer' style={{ color: 'white' }}>
              NEW ARRIVALS
            </p>
            <p style={{ color: ' #F16D7F' }}>FOR KIDS</p>
          </div>
        </div>

        <div className='offer_2'>
          <p style={{ color: 'white' }}>LUXIROUS & TRENDY</p>
          <p style={{ color: ' #F16D7F' }}>ACCESORIES</p>
        </div>
      </div>
      <section className='goods'>
        <div className='container goods__container'>
          <h2 className='goods__title'>Featured Items</h2>
          <p className='goods__description'>
            Shop for items based on what we featured in this week
          </p>
          <ul className='goods__list'>
            {exampleProducts.map((product) => (
              <li key={product.id} className='goods__item product'>
                <div className='product__image-wrapper'>
                  <img
                    className='product__image'
                    src={product.image}
                    alt={product.title}
                  />
                  <button
                    className='product__add'
                    onClick={() => onAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className='product__content'>
                  <h3 className='product__title'>{product.title}</h3>
                  <p className='product__description'>{product.description}</p>
                  <p className='product__price'>${product.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link to='/catalog'>
            <button className='goods__add-btn' type='submit'>
              Browse All Products
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
