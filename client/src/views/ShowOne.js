import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ShowOne = (props) => {
    const { _id } = useParams();
    const [showone, setShowone] = useState([]);
    const history = useHistory();

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



    const onDeleteHandler = (_id, index) => {
        // console.log(_id);
        // console.log(index);
        axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
        .then(res=>{
            console.log(res);
            history.push("/")
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <p>Title: {showone.title}</p>
            <p>Price: {showone.price}</p>
            <p>Description: {showone.description}</p>
            <button onClick={()=>onDeleteHandler(showone._id)}>Delete</button>
        </div>
    )
}

export default ShowOne;