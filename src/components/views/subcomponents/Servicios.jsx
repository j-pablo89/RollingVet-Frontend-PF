import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import "../../../App.css";

const Servicios = () => {
  return (
    <div>
      <hr />
      <h2 className="text-center py-3 display-4">Servicios</h2>
      <Row className="container-fluid row g-4" xs={1} sm={2} md={2} lg={4}>
        <Col>
          <Card className="hoverTrigger border-3" border="warning" >
            <Card.Header className="text-danger text-center bg-warning">INTERNACIONES</Card.Header>
            <Card.Body className="cardbody">
              <Card.Text>
              Salas de Internación Diurna con espacios individualizados para monitoreo y cuidado de pacientes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="hoverTrigger border-3" border="warning">
            <Card.Header className="text-danger text-center bg-warning">RAYOS X</Card.Header>
            <Card.Body className="cardbody">
              <Card.Text>
              Servicio de radiografías realizados con equipos de última generación.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="hoverTrigger border-3" border="warning">
            <Card.Header className="text-danger text-center bg-warning">LABORATORIO</Card.Header>
            <Card.Body className="cardbody">
              <Card.Text>
              Estudios de laboratorio en 24hs en todas nuestras sucursales.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="hoverTrigger border-3" border="warning">
            <Card.Header className="text-danger text-center bg-warning">ECOGRAFÍAS</Card.Header>
            <Card.Body className="cardbody">
              <Card.Text>
              Servicio de ecografías con equipo móvil para diagnósticos expeditivos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="hoverTrigger border-3" border="warning">
            <Card.Header className="text-danger text-center bg-warning">CASTRACIONES</Card.Header>
            <Card.Body className="cardbody">
              <Card.Text>
              Castraciones de machos y hembras, caninos y felinos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="hoverTrigger border-3" border="warning">
            <Card.Header className="text-danger text-center bg-warning">CIRUGÍAS</Card.Header>
            <Card.Body className="cardbody">
              <Card.Text>
              Cirugías de baja y alta complejidad, realizadas en nuestros quirófanos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="hoverTrigger border-3" border="warning">
            <Card.Header className="text-danger text-center bg-warning">CARDIOLOGÍA</Card.Header>
            <Card.Body className="cardbody">
              <Card.Text>
              Servicio de electrocardiograma y diagnóstico cardiológico.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="hoverTrigger border-3" border="warning">
            <Card.Header className="text-danger text-center bg-warning">PLANES NUTRICIONALES</Card.Header>
            <Card.Body className="cardbody">
              <Card.Text>
              Diseño de planes alimenticios para pacientes con obesidad, diabetes, alergias, problemas renales y otros.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Servicios;
