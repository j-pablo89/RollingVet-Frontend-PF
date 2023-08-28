import {Button, Col, Form, Row, FloatingLabel } from 'react-bootstrap';

const Contacto = () => {
  return (
    <div className='container my-4 py-3'>
        <h2 className='text-center pb-5 text-danger'>Dejanos tus datos y nos contactaremos a la brevedad</h2>
      <Form className='text-center'>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel controlId="floatingInput" label="Nombre" className="mb-3 border border-1 border-info rounded-2">
              <Form.Control type="text"/>
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <FloatingLabel controlId="floatingInput" label="Apellido" className="mb-3 border border-1 border-info rounded-2">
              <Form.Control type="text"/>
            </FloatingLabel>
          </Form.Group>
          </Row>
          <Row>
        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
            <FloatingLabel controlId="floatingInput" label="Telefono o Celular" className="mb-3 border border-1 border-info rounded-2">
              <Form.Control type="number" placeholder="name@example.com" />
            </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
           <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 border border-1 border-info rounded-2">
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
        </Form.Group>
        </Row>
        <Form.Group>
            <FloatingLabel controlId="floatingTextarea2" label="Tu consulta" className="border border-1 border-info rounded-2">
              <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}/>
            </FloatingLabel>
        </Form.Group>
        <Button variant="success" type="submit" className='mt-4 px-4'>Enviar</Button>
        </Form>
    </div>
  );
};
export default Contacto;
