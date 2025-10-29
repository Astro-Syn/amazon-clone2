import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa6";
import { addtoCart } from "../features/cartSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

export default function Product({ id, title, price, description, category, image }) {
  const [rating, setRating] = useState(null);
  const [hasPrime, setHasPrime] = useState(false);


  useEffect(() => {
    const randomRating = Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING);
    const randomPrime = Math.random() < 0.5;

    setRating(randomRating);
    setHasPrime(randomPrime);
  }, []);


  if (rating === null) {
    return (
      <div className="relative flex flex-col m-5 bg-white z-30 p-10 animate-pulse">
        <div className="h-48 w-full bg-gray-200 rounded" />
      </div>
    );
  }

  const dispatch = useDispatch();

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

      <img src={image} height={200} width={200} alt={title} style={{ objectFit: "contain" }} />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array.from({ length: rating }).map((_, i) => (
          <FaStar key={i} className="h-5 text-yellow-500" />
        ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        {new Intl.NumberFormat("en-CA", {
          style: "currency",
          currency: "CAD",
        }).format(price)}
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="/Images/prime.png" alt="Prime logo" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button"
      onClick={() => dispatch(addtoCart({title, image}))}
      >
        Add to Basket
      </button>
    </div>
  );
}
