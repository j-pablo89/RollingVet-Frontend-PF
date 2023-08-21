import { Card, Col, Container, Row } from "react-bootstrap";

const Profesionales = () => {
  return (
    <div>
      <hr />
      <h2 className="display-4 text-center py-3">Equipo de Profesionales</h2>
      <Container>
        <Row className="g-4 py-3 row">
            <Col className="col-xs-6 col-sm-6 col-lg-4 col-md-6 col-12">
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/6235242/pexels-photo-6235242.jpeg" />
                <Card.Body className="text-center">
                  <Card.Title>Carlos Pérez</Card.Title>
                  <Card.Text>
                    Médico Veterinario M.P.: N°7023
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-xs-6 col-sm-6 col-lg-4 col-md-6 col-12">
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg" />
                <Card.Body className="text-center">
                  <Card.Title>Lucas Suárez</Card.Title>
                  <Card.Text>
                    Médico Veterinario M.P.: N°7685
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-xs-6 col-sm-6 col-lg-4 col-md-6 col-12">
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/5486964/pexels-photo-5486964.jpeg" />
                <Card.Body className="text-center">
                  <Card.Title>Samanta Rivas</Card.Title>
                  <Card.Text>
                    Médico Veterinario M.P.: N°4340
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-xs-6 col-sm-6 col-lg-4 col-md-6 col-12">
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/5487067/pexels-photo-5487067.jpeg" />
                <Card.Body className="text-center">
                  <Card.Title>Marcos Cáceres</Card.Title>
                  <Card.Text>
                    Médico Veterinario M.P.: N°7954
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-xs-6 col-sm-6 col-lg-4 col-md-6 col-12">
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/6816848/pexels-photo-6816848.jpeg" />
                <Card.Body className="text-center">
                  <Card.Title>Alejandra Medina</Card.Title>
                  <Card.Text>
                    Peluquería Canina
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-xs-6 col-sm-6 col-lg-4 col-md-6 col-12">
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/6131568/pexels-photo-6131568.jpeg" />
                <Card.Body className="text-center">
                  <Card.Title>Carolina Luna</Card.Title>
                  <Card.Text>
                    Peluquería Canina
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profesionales;
