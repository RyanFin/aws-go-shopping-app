import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Image, Badge, Card, Jumbotron } from 'react-bootstrap'

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
                    return <Tri key={index} product={p} />
                })}

            </Jumbotron>
        </div>
    )
}

const Tri = ({ product }) => {
    return (
        <Container>
            <Row>
                <Col>
                <p style={{marginBottom: '30px'}}></p>
                    <h5>{product.id}. - {product.name}</h5>
                    <p style={{marginBottom: '10px'}}></p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="text-right" border="primary" style={{ width: '70%', margin: '0 auto', float: 'none', marginBottom: '10px', marginTop: '8px'}}>
                        <Card.Header># {product.id}</Card.Header>
                        <Card.Body>
                            <Card.Img
                                variant="top"
                                alt={product.name}
                                src={product.image_url}
                            />
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <medium className="text-muted"><i>Price (GBP):</i> </medium>
                            <Badge variant="info">£{product.price}</Badge>
                            </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <u>Description</u>
                    <p style={{ textAlign: "justify" }}>{product.description}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Product
