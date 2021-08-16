import React from 'react'
import { Card, Button } from 'react-bootstrap';

export const Products = () => {

    return (
        <div className="products-container d-flex">
            <Card className="product-card1 my-1" style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://lorempixel.com/50/50/nature/" />
                <Card.Body>
                    <Card.Title>Hortalizas de temporada</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>

            <Card className="product-card2 my-1" style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://lorempixel.com/50/50/nature/" />
                <Card.Body>
                    <Card.Title>Flores</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>

            <Card className="product-card3 my-1" style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://lorempixel.com/50/50/nature/" />
                <Card.Body>
                    <Card.Title>Macetas</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>

            <Card className="product-card4 my-1" style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://lorempixel.com/50/50/nature/" />
                <Card.Body>
                    <Card.Title>Otros productos</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    );
};