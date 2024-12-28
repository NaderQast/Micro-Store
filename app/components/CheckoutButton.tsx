"use client";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CheckoutButton = () => {
  const { cartItems, totalPrice }: any = useContext(CartContext);

  const handleCheckout = async () => {
    if (!cartItems.length) {
      alert("Your cart is empty.");
      return;
    }

    try {
      const orderData = {
        _type: "order",
        items: cartItems.map((item: any) => ({
          _type: "orderItem",
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          productId: item._id,
        })),
        total: totalPrice,
        createdAt: new Date().toISOString(),
      };

      const response = await fetch("/api/createOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert("Order placed successfully!");
      } else {
        alert("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <button
      type="button"
      className="checkout-btn"
      onClick={handleCheckout}
    >
      Continue to Checkout
    </button>
  );
};

export default CheckoutButton;
