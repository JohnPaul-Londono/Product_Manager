import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddProduct = (props) => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    // const [product, setProduct] = useState([]);

    // const onChangeHandler = event => {
    //     setTitle(event.target.value);
    //     setPrice(event.target.value);
    //     setDescription(event.target.value);
    // }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Submitted");
        history.push("/api/products/new")
        
        axios.post("http://localhost:8000/api/products/new",{
            title, price, description})
            .then(res =>{
                console.log(res);
                window.location.reload(false);
            })
            .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor='title'>Title</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='price'>Price</label>
                <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label htmlFor='description'>Description</label>
                <input type="text" name="description" value={description}  onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="SUBMIT" />
            </div>
        </form>
    )

}


export default AddProduct;