import React from "react";
import { Link } from "react-router-dom";

const CartPage = ({ cartItems, onUpdateQuantity }) => {
const totalPrice = cartItems.reduce(
(total, item) => total + item.price * item.quantity,
0
);

return (
<main className="cart">
  <div className="top-head">
    <div className="top-head_navigation">
      <h2 className="top-head__heading">CART</h2>
      <nav className="bread_crumbs">
        <Link to="/" className="bread_crambs__link">HOME</Link>
        <Link to="/catalog" className="bread_crambs__link">CATALOG</Link>
        <Link to="/cart" className="bread_crambs__link_site" style={{ color: "#f16d7f" }}>CART</Link>
      </nav>
    </div>
  </div>

  <div className="bigContainerCart">
    <div className="preContainerProductGroup column">
      {cartItems.map((item) => (

      <div className="containerProductGroup">
        <div key={item.id} className="product_group">

          <div className="product_group_image1 column1">
            <img className="product__image_cart" src={item.image} alt={item.title} />
          </div>
          <div className="product_group_text column1">
            <h3 style={{ margin: "5px" , marginBottom: "50px" }}>{item.title}</h3>
            <div className="product_group_textPrise">
              <p style={{ margin: "5px" }}>Price:</p>
              <p className="product_group_textPrise_tPrise">${item.price.toFixed(2)}</p>
            </div>
            <div className="product_group_text_cartColor">
              <p>COLOR:</p>
              <p>{item.color}</p>
            </div>
            <div className="product_group_text_cartSize">
              <p>SIZE:</p>
              <p>{item.size}</p>
            </div>
            <div className="product_group_text_cartQuant">
              <p>Quantity:</p>
              <input type="number" value={item.quantity} onChange={(e)=> onUpdateQuantity(item.id,
              parseInt(e.target.value))}
              style={{ height: "30px", width: "40px" }}
              />
            </div>
          </div>
            <div className="product_group_cross column1">
            <Link to="#"><img src="/icon/the_cross.svg" alt="" /></Link>
          </div>
        </div>


      </div>
      ))}
    </div>

    <div className="column">
      <div className="product_group_shipping_adress">
        <h3 style={{ marginTop: 10, fontSize: 16 }}>SHIPPING ADDRESS</h3>
        <form action="#">
          <label htmlFor="country"></label>
          <input type="text" id="country" placeholder="Bangladesh" />

          <label htmlFor="state"></label>
          <input type="text" id="state" placeholder="State" />

          <label htmlFor="postcode"></label>
          <input type="text" id="postcode" placeholder="Postcode / Zip" />
          <button className="button_get_a_qoute" type="submit">GET A QUOTE</button>
        </form>
      </div>




      <div className="container_regForm_totalInformation">
        <div className="product_group_total">

          <div className="product_group_total_sub_total">
            <p>SUB TOTAL</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <div className="product_group_total_grand_total">
            <p>GRAND TOTAL</p>
            <p style={{ color: "#F16D7F" }}>${totalPrice.toFixed(2)}</p>
          </div>
          <div className="product_group_total_horisont_line">
            <a href="#">
              <div className="product_group_total_button">
                <p>PROCEED TO CHECKOUT</p>
              </div>
            </a>
          </div>
        </div>

      </div>

    </div>



  </div>

</main>
);
};

export default CartPage;