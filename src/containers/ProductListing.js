import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { useEffect } from 'react'
import { SetProducts } from '../redux/actions/ProductActions'

const ProductListing = () => {
    const products = useSelector((state)=>state)
    const dispatch = useDispatch()
    console.log(products)
    const fetchProducts = async ()=>{
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log(err)
        })
        console.log(response.data)
        dispatch(SetProducts(response.data))
    }
    useEffect(()=>{
        fetchProducts()
    },[])
  return (
    <div className='container'>
         <h2>ProductListing</h2>
         <ProductComponent/>

    </div>
  )   
}

export default ProductListing