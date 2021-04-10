import React, { useEffect, useState } from 'react'
import { Figure, FigureImage, FigureCaption, Jumbotron } from 'react-bootstrap'

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
            <h2>Browse our range of skating products!</h2>
            <h4>Total number of products: {products.length}</h4>

                {products.map((p, index) => {
                    return <Card product={p} />
                })}

            </Jumbotron>
        </div>
    )
}

const Card = ({ product }) => {
    return (
        <Figure>
            <Figure.Image
                width={400}
                height={400}
                alt={product.name}
                src={product.image_url}
            />
            <Figure.Caption>
            {product.name} || £{product.price}
            </Figure.Caption>
            <p>{product.description}</p>
        </Figure>
        
    );
}

export default Product
