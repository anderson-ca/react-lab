import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Shop = () => {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const url = "https://fakestoreapi.com/products?limit=5"
        const response = await axios(url);
        const data = response.data;
        console.log(data)
        setProducts(data)
    }

    return (
        <div>
            <h2>Shop Page</h2>
            {products.map(({title, id}) => (
                <h1 key={id}>
                    <Link to={`shop/${id}`}>{title}</Link>
                </h1>
            ))}
        </div>
    );
}

export default Shop;
