import React from 'react'
import Products from '../Components/Products'

const Home = () => {
    return (
        <>
           <header className="flex justify-around items-center p-10">
               <div>
                   <em className="text-xl">Are you hungry ?</em>
                   <h1 className="text-5xl mb-4 font-bold mt-3">Don't wait !</h1>
                   <button className="p-2 rounded-2xl text-white font-semibold mt-3 bg-yellow-500 hover:bg-yellow-600">Order now</button>
               </div>
               <div className="mt-2">
                   <img src="/images/pizza.png" alt="Pizza" />
               </div>
           </header>

           <div className="pb-20">
               <Products></Products>
           </div>
        </>
    )
}

export default Home
