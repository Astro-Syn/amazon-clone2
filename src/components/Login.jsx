import React, { useState } from 'react'


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <form className='flex flex-col items-center justify-center space-y-4 w-full'>
        <h3 className='text-black text-xl'>Sign in or create an account</h3>


                <button
                    className='absolute top-2 right-2 text-gray-600 hover:text-black'
                    onClick={() => setShowLogin(false)}
                    >
                        ✕
                </button>
        <div className='w-full flex flex-col text-left max-w-xs'>
            <label className='text-md text-black'>Email</label>
            <input
            type="email"
            className="form-control border rounded-sm border-gray-500 p-2 mt-1"
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div className='w-full flex flex-col text-left max-w-xs'>
            <label className='text-md text-black'>Password</label>
                <input
                type='password'
                className='form-control border rounded-sm border-gray-500 p-2 mt-1'
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
        </div>

        <div className='log-sett'>
            <button type='submit' className='p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-xl focus:outline-none focus:ring-yellow-500 active:from-yellow-500'>
                Submit
            </button>
            <div>
                
            </div>
        </div>
    </form>
    
  )
}
