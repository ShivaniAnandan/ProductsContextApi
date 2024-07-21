import { createContext, useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Products from './components/Products';
import Cart1 from './components/Cart';
import axios from 'axios';

//Creating a context
export const myContext = createContext('');

function App() {

  const [products,setProducts] = useState([]); // Initialize an empty products object
  const [cart, setCart] = useState([]); // Initialize an empty cart object
    
    axios.get('https://fakestoreapi.com/products')
    .then(res=>setProducts(res.data))
    .catch(err=>console.log(err));
  

  
  
  // const[data,setData] = useState(products);
  
  return (
    <>
      {/* <h1>App Component </h1> */}
      {/* Creating routes for home , products and cart */}
      <BrowserRouter>
      {/* Providing context */}
      <myContext.Provider value={[cart,setCart]}>
        <div>
        <Navbar cart={cart.length}/>
        </div>
        <Routes>
          <Route path="/" element={<Products products={products}/>} />
          <Route path="/cart" element={<Cart1 />} />
        </Routes>
      </myContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
