"use client"
import styles from '../page.module.css'
import Link from "next/link";
interface Product {
  id: number;
  title: string;
  price: string;
  images: any;
  thumbnail: string;
  rating:number;
}

import React, { useEffect, useState } from 'react'
import StarsRatings from './Rating';

export default function SpecialProduct() {
    const [specialProduct, setSpecialProduct] = useState <Product | null> (null)
    useEffect(()=>{
        fetch("https://dummyjson.com/products/16")
        .then((response)=>response.json())
        .then((product)=>setSpecialProduct(product))
    },[])
  return (
    <>
      {specialProduct&&<div className ={styles.specialProduct}>
        <img src={specialProduct.thumbnail} width="200px"/>
        <h4> {specialProduct.title} </h4>
        <StarsRatings value={specialProduct.rating} className={styles.ratings} />
        <Link href={`/product/${specialProduct.id}`} className={styles.link}>See more details</Link>
        
        
        </div>}
    </>
  )
}
