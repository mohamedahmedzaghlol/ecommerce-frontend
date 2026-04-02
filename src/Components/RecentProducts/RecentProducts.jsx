import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RecentProducts() {
  // 1. بنعرف المكان اللي هنخزن فيه المنتجات (State)
  const [products, setProducts] = useState([]);

  // 2. الفانكشن اللي بتجيب البيانات من السيرفر
  function getProducts() {
    axios
      .get(`http://localhost:3000/api/v1/products`)
      .then((res) => {
        // بنحط البيانات اللي جت في الـ State
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }

  // 3. بنشغل الفانكشن أول ما الصفحة تفتح
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Recent Products
      </h1>

      <div className="flex flex-wrap -m-4">
        {/* 4. بنلف على كل منتج ونرسم الكارت بتاعه */}
        {products.map((product) => (
          <div key={product._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between">
              {/* هنا التعديل بتاع الصورة الاحتياطية */}
              <img
                // بدل ما نبعت اللينك البايظ، هنبعت الصورة الـ Static علطول لغاية ما تخلص الـ Multer
                src="https://placehold.co/400x400?text=Product+Image"
                className="w-full h-[200px] object-contain rounded-lg"
                alt={product.title}
              />

              <div className="mt-4">
                <h3 className="text-emerald-500 text-xs font-bold uppercase tracking-widest mb-1">
                  {product.category?.name}
                </h3>
                <h2 className="text-gray-900 font-bold text-lg line-clamp-1">
                  {product.title}
                </h2>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-gray-900 font-semibold">
                    {product.price} EGP
                  </span>
                  <span className="flex items-center text-sm text-gray-500">
                    <i className="fas fa-star text-yellow-400 mr-1"></i>
                    {product.ratingsAverage}
                  </span>
                </div>

                <button className="w-full bg-emerald-600 text-white py-2 rounded-lg mt-4 hover:bg-emerald-700 transition-colors">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
