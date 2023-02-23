import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";


import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error: ", err);
      });
      dispatch(setProducts(response.data));
  };

 

  console.log("Products: ",products);

  useEffect(()=> {

    fetchProducts();

  },[])

  return (
    <div className="product-list">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
