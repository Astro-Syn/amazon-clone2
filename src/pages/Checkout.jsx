import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removefromCart } from '../features/cartSlice';

export default function Checkout() {
  const cartItems = useSelector(state => state.cart.cart) || [];
  const dispatch = useDispatch();


  const toNum = (val) => {
    const n = Number(val);
    return Number.isFinite(n) ? n : 0;
  };

  const total = cartItems.reduce((sum, item) => sum + toNum(item?.price), 0);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* Left - Cart */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold border-b pb-4 mb-6">Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-600 text-center py-10">
              Your cart is empty. <Link to="/" className="text-yellow-600 underline">Continue shopping</Link>.
            </p>
          ) : (
            cartItems.map((item) => {
              const priceNum = toNum(item?.price);
              return (
                <div
                  key={item.id ?? `${item.title}-${Math.random()}`}
                  className="flex flex-col sm:flex-row items-center sm:items-start border-b border-gray-200 py-5"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-32 h-32 object-contain mb-4 sm:mb-0"
                  />
                  <div className="flex flex-col sm:ml-6 w-full">
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    {item.description && (
                      <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                    )}
                    <p className="text-lg font-bold mt-2">
                      ${priceNum.toFixed(2)}
                    </p>

                    <button
                      onClick={() => dispatch(removefromCart({ id: item.id }))}
                      className="text-red-600 mt-3 hover:text-red-800 text-sm self-start"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })
          )}

          <Link to="/" className="inline-block">
            <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-md font-semibold">
              ← Return to Home
            </button>
          </Link>
        </div>

       
        {cartItems.length > 0 && (
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md h-fit">
            <h3 className="text-lg font-semibold border-b pb-3 mb-4">Order Summary</h3>
            <div className="flex justify-between text-gray-700 mb-3">
              <p>Items ({cartItems.length})</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-semibold text-lg mb-4">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>

            <button 
            onClick={() => navigate('/payment')}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded-md mt-3">
              Proceed to Checkout
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
