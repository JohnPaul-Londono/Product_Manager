import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ShowOne = (props) => {
    const { _id } = useParams();
    const [showone, setShowone] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/one/" + _id)
            .then(res => {
                console.log(res);
                setShowone(res.data.product);
            })
            .catch(err =>{
                console.log(err);
                setShowone("");
            })
    }, [_id])


    return (
        <div>
            <p>Title: {showone.title}</p>
            <p>Price: {showone.price}</p>
            <p>Description: {showone.description}</p>
        </div>
    )
}

export default ShowOne;