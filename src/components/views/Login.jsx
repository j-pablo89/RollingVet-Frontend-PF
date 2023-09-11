import { Form, Row, Button, Col, FloatingLabel, Image, Container } from "react-bootstrap";

const Login = () => {
  return (
    <div className="mifondo2">
        <Row className="d-flex justify-content-center mx-0">
            <Col lg={7}>
                <Row className="my-5 py-3 border border-5 border-danger-subtle rounded-5 mifondo">
                <Col lg={7}>
                   <h2 className="text-center py-3 text-danger">Iniciar Sesión</h2>
                   <Form className="d-flex align-items-center flex-column">
                        <Form.Group controlId="formGridEmail" className="mb-3">
                        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3 border border-1 border-info rounded-2">
                            <Form.Control type="email" placeholder="Email" />
                        </FloatingLabel>
                        </Form.Group>
                        <Form.Group controlId="formGridPassword" className="mb-3">
                        <FloatingLabel controlId="floatingInput" label="Password" className="mb-3 border border-1 border-info rounded-2">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                        </Form.Group>
                        <Button variant="success" type="submit" className="mt-4 px-5 mb-4">Entrar</Button>
                    </Form>
                </Col>
                <Col lg={3}>
                    <Container className="px-0 d-flex justify-content-center ms-0">
                    <Image src="https://images.pexels.com/photos/6235660/pexels-photo-6235660.jpeg" width={250} rounded className="border border-4 border-danger-subtle" />
                    </Container>
                </Col>
            </Row>
            </Col>
        </Row>
    </div>
  );
};

export default Login;
