"use client"

import React, { useEffect, useState } from 'react'
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

export default function TodaysBestDeals() {
    const [productsArr, setProductsArr] = useState([])
    const limit=6
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
            <Link key={product.id} href={`/product/${product.id}`} className="col-lg-3 col-md-4 col-sm-6 mb-4 mx-3 card">
              <div 
                key={product.id}
                className="home-products-pro"
              >
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
                <div className="cart-btn"><Button className={styles.addToCart} > <ShoppingCartCheckout/> </Button> </div>
              </div>
              
            </Link>
          ))}
        </div>
        </div>
      ) : (
        <p>Loading Products ...</p>
      )}
      
    </div>
  )
}
