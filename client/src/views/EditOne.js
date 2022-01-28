import React, { useEffect,useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const EditOne = (props) => {
    const {_id} = useParams();    
    const history = useHistory();
    // const [title, setTitle] = useState('');
    // const [price, setPrice] = useState('');
    // const [description, setDescription] = useState('');
    const [products, setProducts] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/one/" + _id)
            .then(res => {
                console.log(res);
                setProducts(res.data.product);
            })
            .catch(err =>{
                console.log(err);
                setProducts("");
            })
    }, [_id])

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Submitted");
        history.push("/")
        
        axios.put("http://localhost:8000/api/products/update/" + _id,
            products)
            .then(res =>{
                console.log(res);
                // window.location.reload(false);
            })
            .catch(err=>console.log(err))
    }

    const onChangeHandler = (event) => {
        setProducts({
            ...products,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor='title'>Title</label>
                <input type="text" name="title" value={products.title} onChange={onChangeHandler}/>
            </div>
            <div>
                <label htmlFor='price'>Price</label>
                <input type="number" name="price" value={products.price} onChange={onChangeHandler} />
            </div>
            <div>
                <label htmlFor='description'>Description</label>
                <input type="text" name="description" value={products.description}  onChange={onChangeHandler}/>
            </div>
            <div>
                <input type="submit" value="Update" />
            </div>
        </form>
    )

}


export default EditOne;