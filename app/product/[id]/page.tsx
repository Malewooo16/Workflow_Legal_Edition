"use client";
import StarsRatings from "@/app/main-components/Rating";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Button  from "react-bootstrap/Button";
import { LocalShipping, ShoppingBasket, ShoppingCartCheckout } from "@mui/icons-material";

interface Product {
  id: number;
  title: string;
  price: string;
  images: any;
  thumbnail: string;
  description: string;
  rating: number;
}
export default function Page({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((response) => response.json())
      .then((productData) => setProduct(productData));
  }, [params.id]);
  return (
    <div className="detailed-product">
      {product && (
        <div>
          <h2> Product Name: {product.title} </h2>
          <div className={styles.detailed_product}>
            {" "}
            <h3> {product.title} </h3>{" "}
            <img src={product.images[0]} alt={product.title} width="200px" />
            <p> {product.description} </p>
            <h4> $ {product.price} </h4>
            <StarsRatings value={product.rating} />
            <div className={styles.productOptions}> 
            <Button className={styles.buyNow}> <ShoppingBasket/> Buy Now  </Button> 
            <Button className={styles.addToCart} > <ShoppingCartCheckout/> Add to card </Button> 
            
             </div>
          </div>{" "}
        </div>
      )}
    </div>
  );
}
