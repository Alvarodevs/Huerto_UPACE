import React from 'react'
import { Card } from 'react-bootstrap';

export const Products = () => {

    return (
        <>
        <div className="main-container-products">
            <h2 className="text-center">Encuentra aquí nuestros productos</h2>
        
            <div className="products-container">
            
                <Card className="product-card1 product-card" style={{ width: '15rem' }}>
                    <Card.Img variant="top" src=".\images\Tomato-icon.png" />
                    <Card.Body>
                        <Card.Title>Hortalizas de temporada</Card.Title>
                    </Card.Body>
                </Card>

                <Card className="product-card2 product-card" style={{ width: '15rem' }}>
                    <Card.Img variant="top" src=".\images\Tomato-icon.png" />
                    <Card.Body>
                        <Card.Title>Flores</Card.Title>
                    </Card.Body>
                </Card>

                <Card className="product-card3 product-card" style={{ width: '15rem' }}>
                    <Card.Img variant="top" src=".\images\Tomato-icon.png" />
                    <Card.Body>
                        <Card.Title className="card-title">Macetas</Card.Title>
                    </Card.Body>
                </Card>

                <Card className="product-card4 product-card" style={{ width: '15rem' }}>
                    <Card.Img variant="top" src=".\images\Tomato-icon.png" />
                    <Card.Body>
                        <Card.Title>Otros productos</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </>
    );
};