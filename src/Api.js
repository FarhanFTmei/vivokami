import Axios from "axios";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";

export default function Example() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    Axios.get(`http://localhost/northwind/api/list/products`)
      .then((res) => {
        const data = res.data;
        setProduct(data.products);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div className="bg-white">
      <Navbar />

      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {product.map((products) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  // src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg'
                  // alt='Person using a pen to cross a task off a productivity paper card.'
                  src={products.url}
                  // alt={products.ProductName}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{products.ProductName}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{products.UnitPrice}</p>
            </a>
          ))}

          {/* {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </a>
                    ))} */}
        </div>
      </div>
    </div>
  );
}