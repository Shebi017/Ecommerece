import Product from "../Components/Product";
import {useEffect,useState} from 'react';
const Products = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        console.log("Components is mounted ....");
        fetch('/api/products/')
        .then(response=> response.json())
        .then(data =>{
            //  console.log(data)
             setProducts(data)
            })
       
    },[]);

    return (
        <>
            <section className="mx-10">
                <h1 className="text-xl font-bold ">Products</h1>

                <div className="grid grid-cols-5 gap-24 my-8">
                  
                    {
                        products.map(product => <Product key={product._id} product={product}/>)
                    }

                </div>
            </section>
        </>
    )
}

export default Products
