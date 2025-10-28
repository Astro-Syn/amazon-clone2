import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ErrorBoundary from './components/ErrorBoundary'
import Banner from './components/Banner'
import ProductFeed from './components/ProductFeed'


function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchProducts(){
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);
  

  return (
    <div className='bg-gray-100'>
    <ErrorBoundary>
      <Header/>
      <main className='max-w-screen-2xl mx-auto'>
        <Banner/>
      <ProductFeed products={products}/>
      </main>
      
     
    </ErrorBoundary>
    
    </div>
  )
}

export default App

