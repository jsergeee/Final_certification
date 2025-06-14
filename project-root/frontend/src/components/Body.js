import React from "react";

const Body = () => {
    return (
      <div className="dody-cont">
        <div class="offer">
          <div class="offer_item1">
            <p class="text_ofer" style={{color: 'white'}}>
              30% OFF
            </p>
            <p style={{color:' #F16D7F'}}>FOR WOMEN</p>
          </div>

          <div class="offer_item2">
            <p class="text_ofer" style={{color: 'white'}}>
              HOT DEAL
            </p>
            <p style={{color:' #F16D7F'}}>FOR MEN</p>
          </div>
          <div class="offer_item3">
            <p class="text_ofer" style={{color:'white'}}>
              NEW ARRIVALS
            </p>
            <p style={{color:' #F16D7F'}}>FOR KIDS</p>
          </div>
        </div>

        <div class="offer_2">
          <p style={{color: 'white'}}>LUXIROUS & TRENDY</p>
          <p style={{color:' #F16D7F'}}>ACCESORIES</p>
        </div>
      </div>
      
    );
};

export default Body;