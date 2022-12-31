import React from "react";
import "./All.css";
import img from "./assets/Sticker-mock.webp";
const All = () => {
  return (
    <div className="all">
      <div className="purple">
        <img src={img} alt="" />
      </div>
      <div className="content">
        <h1 className="color-text">color</h1>
        <button className="gradient-button">gradient</button>
        <p className="text-p">
          Wafer cupcake candy macaroon bonbon candy canes cheesecake candy.
          Donut chupa chups sesame snaps candy chocolate cake chocolate cake
          danish. Tart cotton candy gummies cotton candy sweet roll. Wafer pie
          chocolate cake. Caramels toffee gummies. Liquorice sweet oat cake
          chocolate candy canes toffee bear claw. Chocolate cupcake wafer.
          Halvah soufflé halvah. Dessert pastry toffee apple pie chocolate cake
          lemon drops. Tart carrot cake wafer halvah tiramisu fruitcake.
        </p>

        <div className="stars">
          <p>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
          </p>
          <p>36 reviews</p>
        </div>
        <button className="black-btn">ADD TO CART</button>
      </div>
    </div>
  );
};

export default All;
