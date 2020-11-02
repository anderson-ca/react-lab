import React, {useEffect, useState} from "react";
import axios from "axios";

const ProductDetails = ({match}) => {
    let [product, setProduct] = useState({})

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        const response = await axios(`https://fakestoreapi.com/products/${match.params.id}`);
        const data = response.data;
        setProduct(data);
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.image} alt="product image"/>
            <p>{product.description}</p>
        </div>
    );
}

export default ProductDetails;
