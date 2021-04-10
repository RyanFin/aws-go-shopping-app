import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Image, Badge, Card,Jumbotron } from 'react-bootstrap'

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
                <Badge variant="primary">Total number of products: {products.length}</Badge>

                {products.map((p, index) => {
                    return <Tri product={p} />
                })}

            </Jumbotron>
        </div>
    )
}

const Tri = ({ product }) => {
    return (
        <Container>
            <Row>
                <Col sm={8} >
                    <h5>{product.name}</h5>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <Card className="text-right" border="primary">
                        <Card.Header># {product.id}</Card.Header>
                        <Card.Body>
                        <Image
                                width={"280"}
                                height={"300"}
                                alt={product.name}
                                src={product.image_url}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Badge variant="info">£{product.price}</Badge>
                </Col>
            </Row>
            <Row>
                <Col>
                    <u>Description</u>
                    <p style={{ textAlign: "justify" }}>{product.description}</p>
                </Col>
            </Row>

        </Container>

    );
}

export default Product
