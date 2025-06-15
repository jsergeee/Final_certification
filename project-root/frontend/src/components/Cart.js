import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ pageTitle = "Cart" }) => {
  return (
    <div>
      <div className="product_group_text">
        <h3>MANGO PEOPLE T-SHIRT</h3>
        <div className="product_group_parameter">
          <div className="product_group_text_prise">
            <p style={{ color: "black" }}>Prise:</p>
            <p className="text_prise">$300</p>
          </div>
          <div className="product_group_text_color">
            <p>Color:</p>
            <p>Red</p>
          </div>
          <div className="product_group_text_size">
            <p>Size:</p>
            <p>XL</p>
          </div>
          <div className="product_group_text_quant">
            <form action="#">
              Quantity:
              <label htmlFor="Qunt"></label>
              <input
                style={{ width: "44px", height: "24px", marginLeft: "5px" }}
                type="number"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="product_group">
        <div className="product_group_cross">
          <a href="#">
            <img src="/icon/the_cross.svg" alt="" />
          </a>
        </div>
        <div className="product_group_image2"></div>

        <div className="product_group_text">
          <h3>MANGO PEOPLE T-SHIRT</h3>
          <div className="product_group_parameter">
            <div className="product_group_text_prise">
              <p style={{ color: "black" }}>Prise:</p>
              <p className="text_prise">$300</p>
            </div>
            <div className="product_group_text_color">
              <p>Color:</p>
              <p>Red</p>
            </div>
            <div className="product_group_text_size">
              <p>Size:</p>
              <p>XL</p>
            </div>
            <div className="product_group_text_quant">
              <form action="#">
                Quantity:
                <label htmlFor="Qunt"></label>
                <input
                  style={{ width: "44px", height: "24px", marginLeft: "5px" }}
                  type="number"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="product_group_button_container">
        <div className="product_group_button_container_button_clear">
          <div>
            <p>CLEAR SHOPPING CART</p>
          </div>
        </div>

        <div className="product_group_button_container_button_continue">
          <p>CONTINUE SHOPPING</p>
        </div>
      </div>

      <div className="container_regForm_totalInformation">
        <div className="product_group_shipping_adress">
          <h3 style={{ marginTop: "10px", fontSize: "16px" }}>
            SHIPPING ADRESS
          </h3>
          <form action="#">
            <label htmlFor=""></label>
            <input type="text" id="country" placeholder="Bangladesh" />

            <label htmlFor=""></label>
            <input type="text" id placeholder="State" />

            <label htmlFor=""></label>
            <input type="text" id placeholder="Postcode / Zip" />
            <button className="button_get_a_qoute" type="submit">
              GET A QUOTE
            </button>
          </form>
        </div>

        <div className="product_group_total">
          <div className="product_group_total_sub_total">
            <p>SUB TOTAL</p>
            <p>$900</p>
          </div>

          <div className="product_group_total_grand_total">
            <p>GRAND TOTAL</p>
            <p style={{ color: "#F16D7F" }}>$900</p>
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
  );
};

export default Cart;
