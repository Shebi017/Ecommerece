import React, { useState } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Navigation from './Components/Navigation';
import ProductPage from './Pages/Product';
import Cart from './Pages/Cart';
import SingleProduct from './Pages/SingleProduct';
import { useEffect } from 'react/cjs/react.development';
// import { cartContext } from './CartContext';

import { cartContext } from './CartContext';

const App = () => {
  const [cart,setCart]  = useState({})
  // Fetch data from local storage
  useEffect(
    ()=>{
      const cart = localStorage.getItem('cart');
      setCart(JSON.parse(cart));
      console.log(JSON.parse(cart));
    },[]
  )
  useEffect(
    ()=>{
      localStorage.setItem('cart',JSON.stringify(cart));
    },[cart]
  )
  return (
    <>

        <Router>
          <cartContext.Provider value={{cart,setCart}}>
              <Navigation/>
              <Switch>
                  <Route path="/" exact component={Home}></Route>
                  <Route path="/about" component={About}></Route>
                  <Route path="/product" exact component={ProductPage}></Route>
                  <Route path="/product/:_id" component={SingleProduct}></Route>
                  <Route path="/cart" component={Cart}></Route>
              </Switch>

          </cartContext.Provider>
        </Router>

    </>
  )
}

export default App
