

import React from 'react'
import Sidebar from './Sidebar'
import ProductGrid from './ProductGrid'

export default function AppMain() {
  return (
    <div className='d-flex mb-5' style={{height:"100%"}}>
        <Sidebar/>
        <ProductGrid/>
    </div>
  )
}
