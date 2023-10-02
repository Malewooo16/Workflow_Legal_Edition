"use client";

import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import {  ShoppingCartCheckout } from "@mui/icons-material";
import Link from "next/link";
import SpecialProduct from "./SpecialProduct";
import Button  from "react-bootstrap/Button";
import styles from '../page.module.css'

interface Product {
  id: number;
  title: string;
  price: string;
  images: any;
  thumbnail: string;
}
export default function HomeProducts() {
  const [productsArr, setProductsArr] = useState([]);
  const [count, setCount] = useState(0);
  const [paginationTriggered, setPaginationTriggered] = useState(false);
  const limit = 4
 
  const fetchProducts = async () => {
    
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=20`
    );
    const data = await response.json();
    return data.products;
  };
  useEffect(()=>{
     fetchProducts().then((products)=>setProductsArr(products))
  },[limit])
  
  return (
    <div style={{ display: "inline", width: "95%", marginBottom:"50px"  }}>
      <h1 style={{ textAlign: "center" }}>Products Grid</h1>
      {productsArr.length > 0 ? (
        <div className={styles.homeProducts}> 
          <div className="special-product">
        <SpecialProduct />
      </div>
          <div className="row home-products" >
          
          
          {productsArr.map((product: Product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="col-lg-3 col-md-4 col-sm-6 mb-4 mx-3 card product">
              <div 
                key={product.id}
                className="home-products-pro"
              >
                <div className="products-imgs">
                  {" "}
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    width="150px"
                    height="100px"
                  />{" "}
                </div>

                <ul>
                  <li>{product.title}</li>
                  <li>$ {product.price}</li>
                  <Button className={styles.addToCart} > <ShoppingCartCheckout/> <span> Add to Cart</span></Button> 
                </ul>
              </div>
              
            </Link>
          ))}
        </div>
        </div>
      ) : (
        <p>Loading Products ...</p>
      )}
      
    </div>
  );
}
