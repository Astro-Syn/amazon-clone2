import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import ErrorBoundary from './components/ErrorBoundary'
import Banner from './components/Banner'
import ProductFeed from './components/ProductFeed'
import { Provider } from 'react-redux'
import store from './features/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from './pages/Checkout'

function App() {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products")
      const data = await res.json()
      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="bg-gray-100">
          <ErrorBoundary>

            {/* Always visible */}
            <Header />

            <main className="max-w-screen-2xl mx-auto">
              <Routes>

                {/* Home Route */}
                <Route
                  path="/"
                  element={
                    <>
                      <Banner />
                      <ProductFeed products={products} />
                    </>
                  }
                />

               
                <Route path="/checkout" element={<Checkout />} />

              </Routes>
            </main>

          </ErrorBoundary>
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
