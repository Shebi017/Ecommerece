import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {cartContext} from '../CartContext';

const Product = (props) => {

    // console.log(props.product)

    // function addToCart(e,product){
    //     console.log("button is cliked ....",e);
    //     console.log("***** Product is : " ,product)
    // }
    const {cart,setCart} = useContext(cartContext);
    const AddToCart = (e,product)=>{
        // console.log("button is cliked ....");
        // button par click ho tu phir single product page par na jaye.....
        e.preventDefault(); 
        // console.log("***** Product is : " ,product);

        // Cart Format  ID ko use kar ke fetch karna ha.Cart ko hum local storage ma store karte ha tu ek month baad aata hu tu woh mujhe mila ga but price change ho gye ho.. es wajah se id ko store kare ge.
        // const cart ={
        //     items:{
        //         'idofproduct':'quantity',
        //         'idofproduct':'quantity',
        //         'idofproduct':'quantity',
        //     },
        //     totalItems:3
        // }

        // step-1 : Jaise he click hota ha tu hume check karna ha ka cart ma kuch ha ya nhi

        

        let _cart = {...cart} // {}

        if(!_cart.items)
        {
            _cart.items = {};
        }
        if(_cart.items[product._id])
        {
            _cart.items[product._id] += 1;
        }
        else{
            _cart.items[product._id] = 1;
        }

        if(!_cart.totalitems){
            _cart.totalitems = 0;
        }
        _cart.totalitems += 1;

        setCart(_cart);


    }
    return (
        <>
                <Link to={`/product/${props.product._id}`}>
                    <div>
                        <img src={props.product.image} alt="" />
                        <div className="text-center">
                            <h2 className="text-lg font-bold my-2">{props.product.name}</h2>
                            <span className="text-md bg-gray-200 rounded-lg px-3 py-1 my-1">{props.product.size}</span>
                            <div className="flex justify-between items-center mt-3">
                                <h3 className="font-bold">${props.product.price}</h3>
                                <button className="px-3 py-1 bg-yellow-500 rounded-lg" onClick={(e)=>{AddToCart(e,props.product)}}>Add</button>
                            </div>

                        </div>
                    </div>
                </Link>
        </>
    )
}

export default Product
