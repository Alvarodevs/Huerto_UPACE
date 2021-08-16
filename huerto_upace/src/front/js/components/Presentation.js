import React from 'react'
import {Carousel} from 'react-bootstrap'
export const Presentation = () => {


    return (
        <div className="presentation-container">
            <Carousel fade className="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='http://lorempixel.com/400/200/sports/1/Dummy-Text/'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://lorempixel.com/400/200/sports/2/Dummy-Text/"
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
                        src="http://lorempixel.com/400/200/sports/3/Dummy-Text/"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );

};