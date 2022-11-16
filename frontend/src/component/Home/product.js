import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
 
const options={
    edit:false,
    color:"ragba(20,20,20,0.1",
    activeColor:"tomato",
    size:window.innerWidth<600?20:25,
    value:2.5,
    isHalf:true,

}


const Product = ({product}) => {
  return (
    <Link className='productCard'  to ={Product._id}>
        <img src={product.images[0].url} alt={product.name} />
        <div>
            <ReactStars {...options} /> <span>365 Reviews</span>
            </div>
            <div  className='productName'><span>{product.name}</span></div>
            <span>{product.price}</span>
    </Link>
  )
}


export default Product