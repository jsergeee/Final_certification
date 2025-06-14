import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = () => {
  return (
<div>
<div className="top-head">
  <div className="top-head_navigation">
    <h2 className="top-head__heading"></h2>
    <nav class="bread_crumbs">
      <Link to="/" class="bread_crambs__link">
        HOME
      </Link>
      <Link to="/src/pages/Catalog.js" class="bread_crambs__link">
        CATALOG
      </Link>
      <Link to="/src/components/Cart.js" class="bread_crambs__link_site">
        CART
      </Link>
    </nav>
  </div>
</div>
</div>
  );
};

export default BreadCrumbs;