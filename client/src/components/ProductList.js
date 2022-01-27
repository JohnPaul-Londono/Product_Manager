import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
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

    return (
        <div>
            <h2>All Products</h2>
            {
                products.map((product, i )=>{
                    return <li key={i}>{product.title}</li>
                })
            }
        </div>
    )

}

export default ProductList;