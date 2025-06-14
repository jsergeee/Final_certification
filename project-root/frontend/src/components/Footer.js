import React from 'react';

const Footer = () => {
  return (
    <div className='footer-conteiner'>
      <section className='features'>
        <div className='container_features'>
          <ul className='features__list'>
            <li className='features__item'>
              <img src='/icon/FreeDelivery.svg' alt='Free Delivery' />
              <h3 className='features__item-title'>Free Delivery</h3>
              <p className='features__item-description'>
                Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
              </p>
            </li>
            <li className='features__item'>
              <img src='/icon/Sales&discounts.svg' alt='Sales & discounts' />
              <h3 className='features__item-title'>Sales & discounts</h3>
              <p className='features__item-description'>
                Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
              </p>
            </li>
            <li className='features__item'>
              <img src='/icon/Qualityassurance.svg' alt='Quality assurance' />
              <h3 className='features__item-title'>Quality assurance</h3>
              <p className='features__item-description'>
                Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className='subscribe'>
        <div className='subscribe__container container'>
          <blockquote className='subscribe__review' itemScope itemType='https://schema.org/Review'>
            <img src='/image/review.jpg' alt='Customer review' className='subscribe__image' itemProp='image' />
            <p className='subscribe__text' itemProp='reviewBody'>
              “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“
            </p>
          </blockquote>

          <div className='subscribe__content'>
            <h2 className='subscribe__title'>SUBSCRIBE</h2>
            <p className='subscribe__description'>FOR OUR NEWLETTER AND PROMOTION</p>
            <form className='subscribe__form'>
              <input type='email' className='subscribe__input' placeholder='Enter Your Email' required />
              <button type='submit' className='subscribe__button'>Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <footer className='footer'>
        <div className='footer__container'>
          <p className='footer__copyright'>© 2022 Brand All Rights Reserved.</p>
          <ul className='footer__social-list'>
            {/* Социальные иконки без изменений */}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;