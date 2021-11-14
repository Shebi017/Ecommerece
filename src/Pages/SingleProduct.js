import React, { useState } from 'react';
import { useParams,useHistory } from 'react-router';
import { useEffect } from 'react/cjs/react.development';


const SingleProduct = () => {
    const [product,setProduct] = useState({});

    const parms = useParams();
    const history = useHistory();

    useEffect(()=>{
        console.log("Single product page is mounted");
        console.log("parms id is :", parms._id);
        fetch(`/api/products/${parms._id}/`)
        .then(response => response.json())
        .then(data =>{
            setProduct(data);
        })
    },[parms._id])

    return (
        <>
            <button className="text-lg font-semibold mb-10 m-10 p-10 " onClick={()=>{history.goBack()}}>Back</button>
            <section className="flex items-center m-10 p-10">
                <div className="w-96">
                    <img src={product.image} alt="Pizza image" />
                </div>
                <div className="ml-16 text-center">
                    <h2 className="text-xl font-bold mb-3">{product.name}</h2>

                    <h4 className="text-lg font-semibold bg-gray-100 rounded-2xl px-3 py-1 mb-3 text-center">{product.size}</h4>

                    <h5 className="text-lg font-semibold mb-2">${product.price}</h5>

                    <button className="text-white bg-yellow-500 px-5 py-2 rounded-2xl mt-3">Add to cart</button>
                </div>
            </section>
        </>
    )
}

export default SingleProduct
