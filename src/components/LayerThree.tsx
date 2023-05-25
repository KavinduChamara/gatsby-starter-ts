import { Card, Carousel, Col, Image, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Title from './Title';

export default function LayerThree() {
    const recieps = [
        {
            image: "/static/images/slice2.png",
            description: "Portobello Baked Eggs with avacado & border",
            price: "8"
        },
        {
            image: "/static/images/slice1.png",
            description: "Portobello Baked Eggs with avacado & border",
            price: "5"
        },
        {
            image: "/static/images/slice3.png",
            description: "Portobello Baked Eggs with avacado & border",
            price: "4"
        },
        {
            image: "/static/images/slice2.png",
            description: "Portobello Baked Eggs with avacado & border",
            price: "2"
        },
        {
            image: "/static/images/slice3.png",
            description: "Portobello Baked Eggs with avacado & border",
            price: "7"
        }
    ];

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };

    return <Container className="pt-5 pb-5" fluid>
        <Title>Latest Recieps</Title>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {
                Array(Math.ceil(recieps.length / 3)).fill(0).map((v1, i) => {
                    return <Carousel.Item key={i}>
                        <Row>
                            {
                                Array(3).fill(0).map((v2, j) => {
                                    const index = i * 3 + j;
                                    if (recieps.length > index) {
                                        const item = recieps[i * 3 + j];
                                        return <Col class="col-4" key={i * 3 + j}>
                                            <Card>
                                                <Card.Body>
                                                    <Row>
                                                        <Col className="col-4">
                                                            <Image height="100" src={item.image}></Image>
                                                        </Col>
                                                        <Col className="col-8">
                                                            {item.description}
                                                            <br></br>
                                                            <a style={{ color: "#54db70" }}>{item.price}$</a>
                                                            <span><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    }
                                })
                            }
                        </Row>
                    </Carousel.Item>
                })
            }
        </Carousel>
    </Container>;
}
