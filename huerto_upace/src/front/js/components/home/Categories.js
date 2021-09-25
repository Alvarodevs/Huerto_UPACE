import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Categories = () => {

    return (
        <>
        <div className="main-container-products">
            <h2 className="text-center">Encuentra aquí nuestros productos</h2>
        
            <div className="categories-container">
            
                <Card className="category-card1 product-card border-0" style={{ width: '15rem' }}>
                    <Link to='/verdurasyfrutas'>
                        <Card.Img variant="top" src=".\images\Tomato-icon.png" />
                        <Card.Body>
                            <Card.Title>Hortalizas de temporada</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>

                <Card className="category-card2 product-card border-0" style={{ width: '15rem' }}>
                    <Link to='/flores'>
                        <Card.Img variant="top" src=".\images\sunflower.jpeg" />
                        <Card.Body>
                            <Card.Title className="pt-2">Flores</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>

                <Card className="category-card3 product-card border-0" style={{ width: '15rem' }}>
                    <Link to='/macetas'>
                        <Card.Img variant="top" src=".\images\maceta.png" />
                        <Card.Body>
                            <Card.Title className="pt-2">Macetas</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>

                <Card className="category-card4 product-card border-0" style={{ width: '15rem' }}>
                    <Link to='/otros'>
                        <Card.Img variant="top" src=".\images\others.png" />
                        <Card.Body>
                            <Card.Title className="pt-3">Otros productos</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
            </div>
        </div>
        </>
    );
};