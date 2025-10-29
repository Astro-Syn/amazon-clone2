import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function Checkout() {
    const cartItems = useSelector(state => state.cart.cart)
  return (
    <div className='flex flex-col'>
        <div className='bg-white p-10'>
            <h2 className='font-bold mb-10'>Checkout</h2>
            {
                cartItems.map(item => {
                    return (
                        <div>
                            <img src={item.image} className='w-30'/>
                            <div>
                                <p>{item.title}</p>
                                <button>Remove</button>
                            </div>
                        </div>
                    )
                })
            }


        <Link to='/'>
         <button className='bg-yellow-300 rounded-lg m-7 cursor-pointer'>
            Return to Home
        </button>
        </Link>

        </div>
        
       
    </div>
  )
}
