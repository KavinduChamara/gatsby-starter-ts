import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Button, Col, Image, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export default function LayerTwo() {
    return <Container className="pt-5" fluid>
        <Row>
            <Col className="m-auto">
                <AnimationOnScroll animateIn="animate__bounceIn">
                    <Image style={{ position: "absolute", marginLeft: "16%" }} height="100" src="/static/images/slice1.png"></Image>
                    <Image style={{ position: "absolute", marginLeft: "8%", marginTop: "16%" }} height="100" src="/static/images/slice2.png"></Image>
                    <Image style={{ position: "absolute", marginTop: "36%" }} height="100" src="/static/images/slice3.png"></Image>
                    <Image style={{ position: "absolute", marginLeft: "6%", marginTop: "56%" }} height="100" src="/static/images/slice1.png"></Image>
                    <Image style={{ position: "absolute", marginLeft: "28%", marginTop: "74%" }} height="100" src="/static/images/slice2.png"></Image>
                    <Image style={{ position: "absolute", marginLeft: "80%" }} height="100" src="/static/images/slice3.png"></Image>
                    <Image style={{ position: "absolute", marginLeft: "82%", marginTop: "18%" }} height="100" src="/static/images/slice1.png"></Image>
                    <Image style={{ position: "absolute", marginLeft: "72%", marginTop: "36%" }} height="100" src="/static/images/slice2.png"></Image>
                    <Image style={{ position: "absolute", marginLeft: "60%", marginTop: "54%" }} height="100" src="/static/images/slice3.png"></Image>
                    <Image style={{ position: "absolute", marginLeft: "50%", marginTop: "74%" }} height="100" src="/static/images/slice1.png"></Image>
                    <Image className="d-block mx-auto" height="500" src="/static/images/centerslice.png"></Image>
                </AnimationOnScroll>
            </Col>
            <Col style={{ paddingTop: "10rem", height: "100vh" }}>
                <Container style={{ width: "50%" }}>
                    <p style={{ fontSize: "2rem" }}>We make it easy for you to cook delicious dinners</p>
                    <p>Simply choose your recipes from a weekly menu and we'll deliver freshly picked vegitables pre portioned ingredients and step-by-step recieps direct to your door ready for you to cook.</p>
                    <Button style={{ borderRadius: "0", border: "none", color: "black", background: "#54db70" }}>SHOP NOW</Button>
                </Container>
            </Col>
        </Row>
    </Container>;
}
