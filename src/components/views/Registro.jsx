import {Button, Col, Form, Row, FloatingLabel } from 'react-bootstrap';

const Registro = () => {
    return (
        <div className='container my-4 py-3'>
        <h2 className='text-center pb-5 text-danger'>Registro de Usuario</h2>
      <Form className='text-center'>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel controlId="floatingInput" label="Nombre" className="mb-3 border border-1 border-info rounded-2">
              <Form.Control type="text" placeholder="Nombre"/>
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <FloatingLabel controlId="floatingInput" label="Apellido" className="mb-3 border border-1 border-info rounded-2">
              <Form.Control type="text" placeholder="Apellido"/>
            </FloatingLabel>
          </Form.Group>
          </Row>
          <Row>
        <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
           <FloatingLabel controlId="floatingInput" label="Email" className="mb-3 border border-1 border-info rounded-2">
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
            <FloatingLabel controlId="floatingInput" label="Password" className="mb-3 border border-1 border-info rounded-2">
              <Form.Control type="password" placeholder="***********" />
            </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
            <FloatingLabel controlId="floatingInput" label="Repetir Password" className="mb-3 border border-1 border-info rounded-2">
              <Form.Control type="password" placeholder="***********" />
            </FloatingLabel>
        </Form.Group>
        </Row>
        <Button variant="success" type="submit" className='mt-4 px-4'>Registrarse</Button>
        </Form>
    </div>
    );
};

export default Registro;