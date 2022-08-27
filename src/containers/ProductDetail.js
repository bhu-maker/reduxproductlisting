import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SelectedProduct ,RemoveSelectedProduct } from '../redux/actions/ProductActions'
const ProductDetail = () => {
    const {productid} = useParams()
    const dispatch = useDispatch()
    const product = useSelector((state)=>state.product)
    console.log(product)
    console.log(productid)
    const fetchproduct = async()=>{
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productid}`)
        .catch((error)=>{
            console.log(error)
        })
        console.log(response)
        dispatch(SelectedProduct(response.data))
    }
    useEffect(()=>{
       
        fetchproduct();
        return ()=>{
            dispatch(RemoveSelectedProduct())
        }
    },[])
  return (
    <>    <div>ProductDetail</div>
     <h4>{product.id}</h4> 
    <h4>  {product.title}</h4> 
    <h4>  {product.category}</h4> 
    <h4>  {product.price}</h4> 
    <h4>{product.description}</h4>
    <img src={product.image} alt={product.title}/>
</>

  )
}

export default ProductDetail