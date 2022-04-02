import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>
    <div>
      <img className="food-img" src={img} alt="" />
      <img
        className="food-img"
        src="https://produits.bienmanger.com/5948-0w470h470_Jamon_Jabugo_Bellota.jpg"
        alt=""
      />
      <img
        className="food-img"
        src="https://thecookingjar.com/wp-content/uploads/2014/07/hibachi-noodles-71-225x225.jpg"
        alt=""
      />
    </div>
  </div>,
  document.getElementById("root")
);
