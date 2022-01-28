import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res);
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
                setProducts("");
            })
    }, [])

    const onDeleteHandler = (_id, index) => {
        // console.log(_id);
        // console.log(index);
        axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
        .then(res=>{
            console.log(res);
            const copyProducts = [...products];
            copyProducts.splice(index, 1);
            setProducts(copyProducts);
        })
        .catch(err=>console.log(err))
    }



    return (
        <div>
            <h2>All Products</h2>
            {
                products.map((product, i )=>{
                    return <li key={i}><Link to={`/api/products/one/${product._id}`}> {product.title}</Link>
                    <Link to={`/api/products/edit/${product._id}`}><button>Edit</button></Link>
                    <button onClick={()=>onDeleteHandler(product._id, i)}>X</button></li>
                })
            }
        </div>
    )

}

export default ProductList;