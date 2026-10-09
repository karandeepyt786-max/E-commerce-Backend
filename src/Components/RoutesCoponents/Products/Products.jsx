import React, { lazy, Suspense, useEffect, useState } from 'react'
import Nav2 from '../Nav2'
import Left from "./Left"
import Right from "./Right"
import Cart from './AddtoCart'
import { setSingleProduct } from '../../../../Redux/Admin'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Products = () => {

  const {id}=useParams()
  const[SingleIs,setSingleIs]=useState({})

  const GetProduct=async()=>{
try {
    const response = await axios.get(
      `http://localhost:3000/Admin/GetOneProduct/${id}`,
{ withCredentials: true }
    )
    setSingleIs(response.data)
    
  }
  catch(err){
console.log("Error while getting one product ",err)
  }
}
  
useEffect(()=>{
GetProduct()
},[id])

console.log("singleis ",SingleIs)

  return (

  <>
 {  id ? <div className='w-full min-h-screen bg-white'>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <Left imgSrc={SingleIs.ProductImage}/>
          <Right 
            Productid={id}
            AllData={SingleIs}
            ProductName={SingleIs.ProductName}
            ProductPrice={SingleIs.ProductPrice}
            ProductRating={SingleIs.ProductRating}
            ProductReviews={SingleIs.ProductReviews}
            ProductStock={SingleIs.ProductStock}
            ProductCategory={SingleIs.ProductCategory}
            ProductBrand={SingleIs.ProductBrand}
            ProductSale={SingleIs.ProductSale}
            SizeAvailable={SingleIs.SizeAvailable}
            Tags={SingleIs.Tags}
            ColorAvailable={SingleIs.ColorAvailable}
            ProductImage={SingleIs.ProductImage}
          />
        </div>
      </div>
    </div> :<h1>no product chosed</h1> }
  </>
   
  )
}

export default Products
