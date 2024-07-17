import React from 'react'
import './productlist.css'
import Products from '../api/api.json'
import { useSelector } from 'react-redux';
import CartButtons from '.';

const Productlist = () => {
    const {cartList} = useSelector((state)=>state.cart)
    console.log(cartList);
    
    
  return (
    <section className='container'>
    {Products.map((product,key)=>(
        <div className='product-container' key={key}>      
            <img src={product.image} alt="" />
            <br />
            <h3>{product.title}</h3>
            <CartButtons product={product.id} />
        </div>
    ))}
    </section>
  )
}

export default Productlist
