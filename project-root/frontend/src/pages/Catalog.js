import React, { useState } from "react";
import Product from "../components/Product";
import SortFilter from "../components/SortFilter";
import { Link } from "react-router-dom";

const Catalog = ({ products, onAddToCart, pageTitle = "HOME" }) => {
  const [sortOption, setSortOption] = useState("all");

  const handleSort = (value) => {
    setSortOption(value);
  };


  const filteredProducts =
    sortOption === "all"
      ? products
      : products.filter((product) => product.size === sortOption);

  return (
    <div>
      <div className="top-head">
        <div className="top-head_navigation">
          <h2 className="top-head__heading">CATALOG</h2>
          <nav className="bread_crumbs">
            <Link to="/" className="bread_crambs__link">
              HOME
            </Link>
            <Link
              to="/catalog"
              className="bread_crambs__link"
              style={{ color: "#f16d7f" }}
            >
              CATALOG
            </Link>
            <Link
              to="/cart"
              className="bread_crambs__link_site"
              style={{ color: "#636363" }}
            >
              CART
            </Link>
          </nav>
        </div>
      </div>
      <div className="catalog_Container">
        <div>
          <h2 className="goods__title">Available Products</h2>
          <SortFilter onSort={handleSort} />
          <ul className="goods__list">
            {filteredProducts.map((product) => (
              <Product
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
