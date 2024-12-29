import React from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const Products = async () => {
  const products = await client.fetch(groq`*[_type=="product"]{...}`);
  return (
    <>
      <div className="bg-[#f8f8f8] w-full py-12 mt-[125px]">
        <div className="container">
          <div className="">
            <h1 className="text-3xl font-bold">Best Selling </h1>
            <h1>Enjoy Selling Up To 50%</h1>
          </div>
          <div className="mt-6 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2">
            {products.map((product: any, index: number) => {
              const image = product.images && product.images[0];
              return (
                <>
                  <Link href={`/products/${product.slug.current}`}>
                    <div
                      className="bg-white pt-10 drop-shadow-md rounded-lg overflow-hidden"
                      key={index}
                    >
                      {image && (
                        <Image
                          src={urlFor(image).url()}
                          alt={product.slug}
                          width={220} 
                          height={100}
                          className="object-cover h-32 mx-auto"
                        />
                      )}
                      <div className="text-center py-10">
                        <h1 className="text-2xl font-bold">{product.name}</h1>
                        <h1 className="text-xl text-gray text-gray-500">
                          {product.price} S.P
                        </h1>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
