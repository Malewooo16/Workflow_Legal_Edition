"use client"

import React, { useEffect, useState } from 'react'
import {  ShoppingCartCheckout } from "@mui/icons-material";
import Link from "next/link";
import SpecialProduct from "./SpecialProduct";
import Button  from "react-bootstrap/Button";
import styles from '../page.module.css'
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

interface Product {
    id: number;
    title: string;
    price: number;
    images: any;
    thumbnail: string;
  }

export default function TodaysBestDeals() {
    const [productsArr, setProductsArr] = useState([])
    const limit=6


    const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: 1,
        totalPrice: product.price,
        thumbnail: product.thumbnail
      })
    );
  };

    useEffect(()=>{
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=30`)
        .then((response)=>response.json())
        .then((products)=>setProductsArr(products.products))

    },[limit])
  return (
    <div  className={styles.todaysBestDeals}>
      <h1 >Today's Best Deals</h1>
      {productsArr.length > 0 ? (
        <div > 

         {/* camelCase Classes are styled in Global due to bootstrap */}
          <div className="row todaysBest" > 
          
          
          {productsArr.map((product: Product) => (
            <div
            key={product.id}
            className="col-lg-3 col-md-4 col-sm-6 mb-4 mx-3 card product"
          >
            <Link href={`/product/${product.id}`}>
              <div className="products-imgs">
                {" "}
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  height="100px"
                />{" "}
              </div>

              <ul>
                <li>{product.title}</li>
                <li>$ {product.price}</li>
              </ul>
            </Link>

            <div className="cart-btn">
              <Button
                className={styles.addToCart}
                onClick={() => handleAddToCart(product)}
              >
                {" "}
                <ShoppingCartCheckout />{" "}
              </Button>{" "}
            </div>
          </div>
          ))}
        </div>
        </div>
      ) : (
        <p>Loading Products ...</p>
      )}
      
    </div>
  )
}
