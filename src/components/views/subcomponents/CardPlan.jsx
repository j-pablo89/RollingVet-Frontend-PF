import { Card, Col, Row, Button } from "react-bootstrap";

function GridExample() {
  return (
    <div className="container-fluid px-5 pb-3">
      <h2 className="text-center py-3 display-4">
        Nuestros planes para tu mascota
      </h2>
      <Row className="g-4 d-flex justify-content-center" xs={1} sm={2} lg={3}>
        <Col>
          <Card className="text-center border-4 border-danger">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg"
            />
            <Card.Body className="cardBody">
              <Card.Title className="py-3 letraPersonalizada1 text-danger fs-3">
                PRIMEROS PASOS
              </Card.Title>
              <Card.Text>Servicios para mascotas de 0 a 5 años</Card.Text>
            </Card.Body>
            <Card.Footer className="py-4">
              <Button href="#" variant="warning">
                Quiero este Plan
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="text-center border-4 border-danger">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg"
            />
            <Card.Body className="cardBody">
              <Card.Title className="py-3 letraPersonalizada1 text-danger fs-3">
                MADURANDO
              </Card.Title>
              <Card.Text>Servicios para mascotas de 5 a 10 años</Card.Text>
            </Card.Body>
            <Card.Footer className="py-4">
              <Button href="#" variant="warning">
                Quiero este Plan
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="text-center border-4 border-danger">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg"
            />
            <Card.Body className="cardBody">
              <Card.Title className="py-3 letraPersonalizada1 text-danger fs-3">
                ADULTOS
              </Card.Title>
              <Card.Text>Servicios para mascotas de más de 10 años</Card.Text>
            </Card.Body>
            <Card.Footer className="py-4">
              <Button href="#" variant="warning">
                Quiero este Plan
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GridExample;
