import { Jumbotron, Form, Button, InputGroup } from 'react-bootstrap'
import React, { useState, useRef } from 'react'


const Settings = props => {

    const [product, setProduct] = useState(props.product)
    const form = useRef(null)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // var raw = JSON.stringify({ "id": 0, "name": "Sim Street Snakes 2 Tone 64mm Quad Roller Skate Wheelaaa - Blue/Black", "description": "A brilliant recreational skate, the Impala Quads come in a range of stylish colours, and is designed with a classic figure style boot.\n\t\t The high top lace up boot provides great support, and has light padding for comfort which will break in as you use them to form to the foot. \n\t\t Constructed from high quality components such as the Aluminium alloy trucks as well as Urethane wheels and stoppers the Impala Quad Roller Skate \n\t\t gives you a superb all round performance at a great price.", "price": 29.95, "image_url": "https://skatehut.images.blucommerce.com/skatehut/product/Skates/sims-street-snakes-2-tone-62mm-quad-roller-skate-wheels-blue-black-00.jpg?auto=format%2Ccompress&bluhash=1231e8d60392b02c6fc3d06672d26f4a&w=750&h=750&fit=fillmax&fill=solid&s=6cb83ed5e25423cc57eae96702d52e8c" });

    const submit = e => {
        e.preventDefault()
        const data = new FormData(e.target);
        const value = Object.fromEntries(data.entries());
        value.id = parseInt(value.id);
        value.price = parseFloat(value.price);
        console.log(JSON.stringify(value));
        const form = document.querySelector('form');
        fetch("https://6j4fjl5ku2.execute-api.us-east-1.amazonaws.com/Dev/GoShoppingApplicationFunction",{ 
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(value),
        mode: 'no-cors',
        redirect: 'follow'
    })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    return (
        <>
            <Jumbotron>
                <h2>Settings</h2>
                <h4>Add Product</h4>

                <Form ref={form} onSubmit={submit}>
                    {/* <Form.Row> */}
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" name="name"  onChange={e => setProduct({ ...product, name: e.target.value })} placeholder="Enter Product Name..." />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control type="text" name="description" onChange={e => setProduct({ ...product, description: e.target.value })} placeholder="Enter Product Description..." />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Product Price</Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text>£</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="text" name="price"  onChange={e => setProduct({ ...product, price: e.target.value })} placeholder="Enter Product Price..." />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control type="text" name="image_url" onChange={e => setProduct({ ...product, image_url: e.target.value })} placeholder="Enter Image URL..." />
                    </Form.Group>
                    {/* </Form.Row> */}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </Jumbotron>
        </>
    )

}

export default Settings
