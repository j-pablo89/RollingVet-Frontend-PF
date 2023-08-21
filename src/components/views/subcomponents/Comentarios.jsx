import { Card, Button, Row, Col } from "react-bootstrap";

const Comentarios = () => {
  return (
    <div>
      <hr />
      <h2 className="display-4 text-center py-3">Comentarios y Experiencias</h2>
      <Card className="my-3">
        <Card.Body>
          <Card.Title>Carlos Rodriguez</Card.Title>
          <Card.Text>
            Exelente atención.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="my-3">
        <Card.Body>
          <Card.Title>Sebastian Montes</Card.Title>
          <Card.Text>
            Llevé a mi perro a la peluquería, me sorprendió el impecable trabajo de la peluquera. Los recomiendo.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="my-3">
        <Card.Body>
          <Card.Title>Cynthia Nuñez</Card.Title>
          <Card.Text>
            Una veterinaria con excelentes doctores
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="my-3">
        <Card.Body>
          <Card.Title>Claudia Santos</Card.Title>
          <Card.Text>
            Distinguida atención de los doctores
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Comentarios;
