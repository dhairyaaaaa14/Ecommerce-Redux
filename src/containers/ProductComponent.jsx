import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Link to={`/product/${id}`} style={{textDecoration:"none"}}>
        <div className="card" key={id}>
          <img src={image} alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">${price}</p>
          </div>
        </div>
      </Link>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
