import img1 from '../img/image.png'
import AA from '../img/AA.jpg'
import A from '../img/B.jpg'
import B from '../img/C.jpg'
import C from '../img/A.jpg'
import D from '../img/D.jpg'
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Gallery() {
    return (
        <Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
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
                    src="https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTI4NDV8MHwxfHNlYXJjaHwxNnx8dGhhaWxhbmR8ZW58MHx8fHwxNjcyMDk1NTE3&ixlib=rb-4.0.3&q=80&w=400"
                    alt="Second slide"
                    style={{ width: '300px' }}
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1494949360228-4e9bde560065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTI4NDV8MHwxfHNlYXJjaHwxMHx8dGhhaWxhbmR8ZW58MHx8fHwxNjcyMDk1NTE3&ixlib=rb-4.0.3&q=80&w=200"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTI4NDV8MHwxfHNlYXJjaHw0fHxiZXJsaW58ZW58MHx8fHwxNjcyMDk2MTQ3&ixlib=rb-4.0.3&q=80&w=200"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Gallery