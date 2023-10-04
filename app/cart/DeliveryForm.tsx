"use client"

import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux';
import { RootState } from '../utilities/cartTypes';

export default function DeliveryForm( ) {

  const cartPrice=useSelector((state:RootState)=>state.cart.totalPrice)
  return (
    <div className="delivery-form">
        <h4>Basic Information</h4>
        <p>Please check and make sure your payment <br/> information is correct</p>

        <Form>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Customer Name</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Prefered Pickup/ Delivery Method</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Select...</option>
            <option>Delivery</option>
            <option> Pickup </option>
          </Form.Select>
        </Form.Group>

        
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Customer Phone Number</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
      </Row>

      {cartPrice && <div className="d-flex align-items-center justify-content-center row mt-5"> <Button className="cart-form-btn"> Pay {cartPrice} Tsh </Button></div>}
        </Form>
    </div>
  )
}
