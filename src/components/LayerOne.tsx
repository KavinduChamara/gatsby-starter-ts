import Container from 'react-bootstrap/Container';
import Title from './Title';
import { Button, Col, Image, Row } from 'react-bootstrap';

export default function LayerOne() {
    return <Container fluid>
        <Row>
            <Col className="col-sm-12 col-md-4" style={{ paddingTop: "30vh", paddingLeft: "5rem", height: "90vh" }}>
                <Title>You deserve better</Title>
                <p style={{ fontSize: "2rem" }}>Consider this a tast intervention.</p>
                <Button style={{ borderRadius: "0", border: "none", color: "black", background: "#54db70" }}>LEARN MORE</Button>
            </Col>
            <Col className="col-sm-12 col-md-8 m-auto" style={{ backgroundColor: "#c9f9d3" }}>
                <Image className="d-block mx-auto" src="/static/images/plate.png"></Image>
            </Col>
        </Row>
    </Container>;
}
