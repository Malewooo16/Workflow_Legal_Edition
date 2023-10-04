"use client";

import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ShoppingCartCheckout } from "@mui/icons-material";
import Link from "next/link";
import SpecialProduct from "./SpecialProduct";
import Button from "react-bootstrap/Button";
import styles from "../page.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

interface Product {
  id: number;
  title: string;
  price: number;
  images: any;
  thumbnail: string;
}
export default function HomeProducts() {
  const [productsArr, setProductsArr] = useState([]);
  const [count, setCount] = useState(0);
  const [paginationTriggered, setPaginationTriggered] = useState(false);
  const limit = 4;
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: 1,
        totalPrice: product.price,
        thumbnail:product.thumbnail
      })
    );
  };
  const fetchProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=21`
    );
    const data = await response.json();
    return data.products;
  };
  useEffect(() => {
    fetchProducts().then((products) => setProductsArr(products));
  }, [limit]);

  return (
    <div style={{ display: "inline", width: "95%", marginBottom: "50px" }}>
      {productsArr.length > 0 ? (
        <div className={styles.homeProducts}>
          <div className="special-product">
            <SpecialProduct />
          </div>
          <div className="row home-products">
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
  );
}
