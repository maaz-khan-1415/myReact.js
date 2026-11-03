import React from "react";
import "./productcard.css";


const ProductCard = (props) => {
  const { title, price, category, images } = props.element;
  return (
    <div className="card">
      <div className="profile">
        <img src={images[0]} alt="" />
      </div>
      <div className="info">
        <div>{title}</div>
        <div>{category}</div>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;

/**
 * props = {
 *              element: {
 *                          id: 1,
 *                          title: "Essence Maskara",
 *                          price: 9,
 *                          category: "beauty" ,
 *                          images: ["https://"]
 *                        }
 *          }
 */
