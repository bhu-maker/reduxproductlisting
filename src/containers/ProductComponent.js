import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
const ProductComponent = () => {
  const products = useSelector((state)=>state.allproducts.products)
  const {id,title,category,price,image,description} = products
  const renderlist = products.map((pro)=>{
    return(<>
    
      <Link to ={`/product/${pro.id}`}>

     <h4>{pro.id}</h4> 
     
    <h4>  {pro.title}</h4> 
    <h4>  {pro.category}</h4> 
    <h4>  {pro.price}</h4> 
    <h4>{pro.description}</h4>
    <img src={pro.image} alt={title}/>

    </Link>
     </> 

    )
  })
  return (
    // <div className='container'>
    // <h3>ProductComponent</h3>
    // <h4>  {id}</h4> 
    // <h4>  {title}</h4> 
    // <h4>  {category}</h4>    
      
    // </div>
   <>{renderlist}
   </> 
  )
}

export default ProductComponent