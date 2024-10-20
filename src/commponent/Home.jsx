import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Loading from './loader/Loading';
import axios from 'axios';
import { toast } from 'react-toastify';
// import products from "../data"
const Home = () => {
    const [products, setproducts] = useState([]);  
    const [loading, setloading] = useState(true);
 
    async function getAllProducts() {
        setloading(true)
        await axios.get('https://fakestoreapi.com/products')
        .then(res => setproducts(res.data))
        .then(json => console.log(json))
        setloading(false)
    
    }
    function addtoCart() {
        alert("Added to cart")

    }
    useEffect(() => {
        getAllProducts();
        
    }, []);
   
    return (

        <div className='w-4/5 mx-auto p-5 min-h-screen'>
             <div className="grid xl:grid-cols-6  m-5 sm:grid-cols-2 md:grid-cols-4 ">
              
           
           {!loading && products.map((product, index) => {
                return (


              
<div  key={index} className="bg-white ring-slate-900 rounded-xl  p-2 m-2 h-70  border border-1px black ">
<img src={product.image} className="h-[250px] w-full" alt="..." />
<div className="card-body">
<h5 className=" font-bold">{product.title.split(' ').slice(0,2).join(' ')}</h5>
<p className="card-text">$ {product.price}</p>
<div className="  flex justify-between" >
<span className="">{product.rating.rate}</span>
<FaStar className='text-yellow-500'/>
</div>
<button className='bg-green-600 w-full mt-2 p-2 ' onClick={addtoCart}>Add to Cart</button>

</div>

</div>
        


   )
    })
           }
           {loading && <Loading/>}
        </div>
        </div>
    );
}

export default Home;
