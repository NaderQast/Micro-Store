"use client";
import React, { useContext } from "react";
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { TiDeleteOutline } from "react-icons/ti";
import Link from "next/link";
import CheckoutButton from "./CheckoutButton";

const Cart = () => {
  const { onRemove , totalPrice, totalQuantity, cartItems, showCart, setShowCart, toggleCartItemQty }: any =
    useContext(CartContext);

  const handleClose = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <div className="cart-wrapper ">
        <div className="cart-container">
          <button className="cart-heading" onClick={handleClose}>
            <AiOutlineLeft />
            <span className="heading">Your Cart</span>
            <span className="cart-num-items">{totalQuantity}</span>
          </button>
          <div className="product-container">
            {cartItems.map((product: any) => {
              return (
                <div className="product" key={product._id}>
                  <Image
                    loader={() => urlFor(product.images[0]).url()}
                    src={urlFor(product.images[0]).url()}
                    alt={product.images[0]}
                    height={200}
                    width={200}
                    className="object-cover   "
                    key={product._id}
                  />
                  <div className='item-desc'>
                    <div className='top'>
                      <h5>{product.name}</h5>
                      <h4>${product.price}</h4>
                    </div>
                    <div>
                      <div className="quantity-desc">
                        <span className="minus" onClick={() =>toggleCartItemQty(product._id,'minus')}>
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{product.quantity}</span>
                        <span className="plus" onClick={() =>toggleCartItemQty(product._id,'plus')}>
                          <AiOutlinePlus />
                        </span>
                      </div>
                     
                    </div>

               
                  </div>
                  <button type="button" onClick={() => onRemove(product)}>
                      <TiDeleteOutline className="remove-item" />
                    </button>
                </div>
              );
            })}
          </div>
   {cartItems.length >= 1 &&(       <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal</h3>
              <h3>${totalPrice}</h3>
            </div>
            
           <a className="btn-container" href="https://wa.me/+963964626619">
           
                        <button type='button' className='checkout-btn'>
                         Continue to Delivery
                        </button>
                      
           </a>
           
           
           
          </div>)}
        </div>
      </div>
    </>
  );
};

export default Cart;
