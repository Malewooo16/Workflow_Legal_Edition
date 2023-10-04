"use client"

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, CartState, CartItem } from '../utilities/cartTypes';
import DeleteIcon from '@mui/icons-material/Delete';
import { addToCart, removeFromCart, toggleRemove } from '../store/cartSlice';
import DeliveryForm from './DeliveryForm';

export default function Page() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  
  const addHandler = (product: CartItem) => {
    dispatch(addToCart(product));
    
  };

  const deleteHandler = (productId: number) => {
    dispatch(toggleRemove(productId));
    
  };

 

  return (
    <div className='cart'>
      <h4>Cart</h4>
      <p>Please check and make sure your orders <br/> are correct</p>

      {cart ? (
        <>
          <div className="cartTitles">
            <ul className="row">
              <li className="col">Product</li>
              <li className="col">Price</li>
              <li className="col">Quantity</li>
              <li className="col">Total</li>
              <li className="col">Remove</li>
            </ul>
          </div>
          <div className="cart-pro">
            {cart.itemsList.map((cart: CartItem) => (
              <div className={`cartItems ${cart.removed ? 'removed' : ''}`} key={cart.id}>
                <ul key={cart.id} className="row">
                  <div className="col">
                    <li>{cart.name}</li>
                    <img className="cart-img" src={cart.thumbnail} alt={cart.name} width="150px" />
                  </div>
                  <li className="col">{cart.price}</li>
                  <li className="col">{cart.quantity}</li>
                  <li className="col">{cart.totalPrice}</li>
                  <button className="btn col" onClick={() => deleteHandler(cart.id)}> <DeleteIcon /> </button>
                </ul>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h2 style={{ textAlign: 'center' }}>Cart is Loading</h2>
      )}

      <DeliveryForm />
    </div>
  );
}
