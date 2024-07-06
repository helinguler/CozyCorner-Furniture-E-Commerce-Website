import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {

    const { product } = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="produtc"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="star icon" />
          <img src={star_icon} alt="star icon" />
          <img src={star_icon} alt="star icon" />
          <img src={star_icon} alt="star icon" />
          <img src={star_dull_icon} alt="star dull icon" />
          <p>(223)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Fabric Content: Velvet, Fabric Feature: Velvet Texture.Frame
          Material: Black matte baked metal. Seat Firmness: Medium Firm. Seat
          Cushion Material: 32 density foam + fiber used. Back Cushion Material:
          32 density foam + fiber used. Fabric Care/Cleaning Recommendation:
          Wipeable or dry cleaning can be done. All parts are shipped assembled.
          Dimensions: 65*87*75 cm.
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category: </span>Armchair, Green Bergère</p>
        <p className="productdisplay-right-category"><span>Tags: </span>Modern, Cozy, Minimal</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
