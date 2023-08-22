import React from "react";
import { OverlayTrigger, Tooltip, Button, Row, Col } from "react-bootstrap";
import '../../../App.css';

const Servicios = () => {
  const renderTooltip = (props) => (<Tooltip id="button-tooltip" {...props}>Simple tooltip</Tooltip>)
  const renderTooltip2 = (props) => (<Tooltip id="button-tooltip" {...props}>Simple tooltip</Tooltip>)
  const renderTooltip3 = (props) => (<Tooltip id="button-tooltip" {...props}>Simple tooltip</Tooltip>)
  const renderTooltip4 = (props) => (<Tooltip id="button-tooltip" {...props}>Simple tooltip</Tooltip>)
  const renderTooltip5 = (props) => (<Tooltip id="button-tooltip" {...props}>Simple tooltip</Tooltip>)
  const renderTooltip6 = (props) => (<Tooltip id="button-tooltip" {...props}>Simple tooltip</Tooltip>)
  const renderTooltip7 = (props) => (<Tooltip id="button-tooltip" {...props}>Simple tooltip</Tooltip>)
  const renderTooltip8 = (props) => (<Tooltip id="button-tooltip" {...props}>Simple tooltip</Tooltip>
  );
  return (
    <div>
      <hr />
      <h2 className="text-center py-3 display-4">Servicios</h2>
      <Row className="text-center">
        <Col className="col-4 py-3 hoverTrigger"><OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
          <Button variant="success">Hover me to see</Button>
        </OverlayTrigger>
        </Col>
        <Col className="col-4 py-3 hoverTrigger"><OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
          <Button variant="success">Hover me to see</Button>
        </OverlayTrigger>
        </Col>
        <Col className="col-4 py-3 hoverTrigger"><OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
          <Button variant="success">Hover me to see</Button>
        </OverlayTrigger>
        </Col>
        <Col className="col-4 py-3 hoverTrigger"><OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
          <Button variant="success">Hover me to see</Button>
        </OverlayTrigger>
        </Col>
        <Col className="col-4 py-3 hoverTrigger"><OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
          <Button variant="success">Hover me to see</Button>
        </OverlayTrigger>
        </Col>
        <Col className="col-4 py-3 hoverTrigger"><OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
          <Button variant="success">Hover me to see</Button>
        </OverlayTrigger>
        </Col>
        <Col className="col-4 py-3 hoverTrigger"><OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
          <Button variant="success">Hover me to see</Button>
        </OverlayTrigger>
        </Col>
        <Col className="col-4 py-3 hoverTrigger"><OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
          <Button variant="success">Hover me to see</Button>
        </OverlayTrigger>
        </Col>
                
      </Row>
    </div>
  );
};

export default Servicios;
