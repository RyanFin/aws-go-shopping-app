import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'

const Product = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://6j4fjl5ku2.execute-api.us-east-1.amazonaws.com/Dev/GoShoppingApplicationFunction')
            .then(res => res.json())
            .then(res => {
                setProducts(res);
            })
            .catch(e => {
                console.log(e);
            })
    });

    
        return (
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            Products: {products.length}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Image URL</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p, index) => {
                        return <Tr key={index} product={p}/>
                    })}
                </tbody>
            </table>
            </div>
        )
}

const Tr = ({ product }) => {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.image_url}</td>
        </tr>
    );
}

export default Product
