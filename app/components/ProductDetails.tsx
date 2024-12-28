"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CartContext } from "../context/CartContext";

const ProductDetails = ({ product }: any) => {
  const [index, setIndex] = useState(0);
  const { qty, incQty, decQty, addProduct, cartItems }: any =
    useContext(CartContext);

  return (
    <>
      <div className="w-full md:py-16">
        <div className="gap-8 md:max-w-[1024px] m-auto max-w-[600px] px-4 md:px-0 grid md:grid-cols-2 grid-cols-1">
          {/* left */}
          <div className="">
            <div className="h-[450px] flex items-center mb-[25px]">
              <Image
                loader={() => urlFor(product.images[index]).url()}
                src={urlFor(product.images[index]).url()}
                alt="product"
                height="350"
                width="350"
                className="object-cover mx-auto"
              />
              {/* Top */}
            </div>
            <div className="flex gap-[5px] justify-center">
              {product.images?.map((item: any, i: number) => (
                <Image
                  loader={() => urlFor(product.images[i]).url()}
                  src={urlFor(product.images[i]).url()}
                  alt={product.images[0]}
                  height={100}
                  width={220}
                  className="object-cover h-32 mx-auto border rounded-xl hover:cursor-pointer "
                  onClick={() => setIndex(i)}
                  key={item}
                />
              ))}
              {/* bottom */}
            </div>
          </div>
          <div className="flex flex-col gap-8 md:pt-32 pt-0 ">
            {/* right */}
            <div className="flex flex-col gap-4">
              <div className="text-3xl font-bold ">{product.name}</div>
              <div className="text-xl font-medium">${product.price}</div>
            </div>
            <div className="text-xl">
              <p className="text-gray-700 leading-relaxed">
                {product.description ||
                  "No description available for this product."}
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <h3>Quantity</h3>
              <p className="quantity-desc  items-center  ">
                <span className="minus" onClick={decQty}>
                  <AiOutlineMinus />
                </span>
                <span className="num">{qty}</span>
                <span className="plus" onClick={incQty}>
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <button
              className="btn add-to-cart"
              onClick={() => addProduct(product, qty)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
