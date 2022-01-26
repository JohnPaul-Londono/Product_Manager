import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ShowProduct = (props) => {

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [])


}

export default ShowProduct;