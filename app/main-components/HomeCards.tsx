"use client"
import { Smartphone } from '@mui/icons-material';
import React from 'react'
import Card from 'react-bootstrap/Card';

export default function HomeCards() {
  return (
    <div className='HomeCards row'>
        <Card className='column' >
            <Card.Body>
                <Card.Title>Most Popular Categories</Card.Title>
                
                    <div className="icons-main">
                    <div className="icons">
                        <span ><Smartphone style={{fontSize:"50px", marginBottom:"10px"}}/></span>
                        <p>SmartPhones</p>
                    </div>
                    <div className="icons">
                        <span ><Smartphone style={{fontSize:"50px", marginBottom:"10px"}}/></span>
                        <p>Frangrances</p>
                    </div>
                    <div className="icons">
                        <span ><Smartphone style={{fontSize:"50px", marginBottom:"10px"}}/></span>
                        <p>Watches</p>
                    </div>
                    </div>
               
            </Card.Body>
        </Card>

        <Card className='column'>
            <Card.Body>
                <Card.Title>Most Popular Categories</Card.Title>
                
                    <div className="icons-main">
                    <div className="icons">
                        <span ><Smartphone style={{fontSize:"50px", marginBottom:"10px"}}/></span>
                        <p>SmartPhones</p>
                    </div>
                    <div className="icons">
                        <span ><Smartphone style={{fontSize:"50px", marginBottom:"10px"}}/></span>
                        <p>SmartPhones</p>
                    </div>
                    <div className="icons">
                        <span ><Smartphone style={{fontSize:"50px", marginBottom:"10px"}}/></span>
                        <p>Watches</p>
                    </div>
                    </div>
                
            </Card.Body>
        </Card>

        <Card className='column'>
            <Card.Body className="best-deals-body">
                <Card.Title>Best Deals</Card.Title>
                
                    <div className="best-deals">
                       <p> <span style={{backgroundColor:"red", borderRadius:"10px", marginRight:"10px", display:"flex", alignItems:"center",justifyContent:"center", width:'30px', color:"white"}}>  2 </span> for 1 </p>
                    </div>
                
            </Card.Body>
        </Card>
    </div>
  )
}
