import React from "react";


const Product = ({ product, onAddToCart }) => {
  return (
    <li className="goods__item product">
      <div className="product__image-wrapper">
        <img
          className="product__image"
          src={product.image}
          alt={product.title}
        />
        <button className="product__add" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
      <div className="product__content">
        <h3 className="product__title">{product.title}</h3>
        <p className="product__description">{product.description}</p>
        <p className="product__price">${product.price}</p>
      </div>
    </li>
  );
};

export default Product;
