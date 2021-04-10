import React, { useEffect, useState } from 'react'
import { Carousel, Card, Jumbotron } from 'react-bootstrap'

const Product = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://6j4fjl5ku2.execute-api.us-east-1.amazonaws.com/Dev/GoShoppingApplicationFunction')
            .then(res => res.json())
            .then(res => {
                setProducts(res);
                // console.log(res);
            })
            .catch(e => {
                console.log(e);
            })
    });


    return (
        <div>
            <Jumbotron>
                Total number of products: {products.length}

                <p>{products[0].name}</p>

                {products.map((p, index) => {
                    return <Ci product={p}/>
                })}

            </Jumbotron>
        </div>
    )
}

const Ci = ({ product }) => {
    return (
        <div>
            <img
                className="d-block w-100"
                src={product.image_url}
                alt={product.name}
            />
            <p>{product.name}</p>
            <p>{product.description}</p>
        </div>
    );
}

export default Product
