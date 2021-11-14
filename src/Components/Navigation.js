import React from 'react';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../CartContext';

const Navigation = () => {
    const cartcss={
        background:'#F59E0D',
    }
    const {cart} = useContext(cartContext);
    // console.log(name);
    return (
        <>
           <nav className=" mx-10 flex items-center justify-between p-5">
                <div>
                    <Link to="/">
                        <img style={{ height:45 }} src="/images/logo.png" alt="" />
                    </Link>
                </div>
                <div className="flex items-center mr-10">
                    <Link to="/" className="ml-5">Home</Link>
                    <Link to="/product" className="ml-5">Products</Link>
                    <Link to="/cart">
                        <div className=" flex ml-5 py-2 px-5 rounded-xl" style={cartcss}>
                            <span className="text-lg mr-3 text-white">{cart.totalitems}</span>
                            <img src="/images/cart.png" alt="" />
                        </div>
                    </Link>
                </div>
           </nav>
        </>
    )
}

export default Navigation
