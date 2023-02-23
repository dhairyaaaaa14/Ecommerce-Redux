import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct,removeSelectedProduct } from "../redux/actions/productActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product)
  const { id, title, image, price, category,description } = product;

  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err)
      });
      console.log(response)
      dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if(productId && productId!=="") fetchProductDetail();

    return () => {
      dispatch(removeSelectedProduct())
    }
  },[productId])
  
  return (
    
      <div className='product-detail'>
    {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
      ):  (<>
        <div className="product-image">
            <img src={image} alt="" />
        </div>
        <div className="product-info">
            <div className="title">
                <h4>{title}</h4>
            </div>
            <div className="product-price">
            ${price}
            </div>
            <div className="product-desc">
                {description}
            </div>
            <div className="button"></div>
            <button className="btn btn-primary">
            Add to Cart
            </button>
        </div></>)}
   

    </div>
      
  );
};

export default ProductDetails;
