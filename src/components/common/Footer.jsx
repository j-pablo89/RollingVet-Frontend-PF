import { Col, Row, Image} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faThreads, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../../App.css';

const Footer = () => {
  return (
    <div className="text-center bg-danger text-white py-4">
      <Row className="py-3 mx-0" xs={1} sm={2} md={2} lg={3}>
        <Col>
          <Image src="/src/assets/LAHUELLA.png" rounded />
           <ul className="text-start ms-5 pt-4 ps-5">
            <li className="pb-1"><FontAwesomeIcon icon={faLocationDot} size="2x" color="#FFFFFF"/> Dirección: Gral Paz 575 - Tucumán</li>
            <li className="pt-1"><FontAwesomeIcon icon={faPhone} size="2x" color="#FFFFFF"/> Telefono: 0381 4235210</li>
            <li className="pt-2"><FontAwesomeIcon icon={faEnvelope} size="2x" color="#FFFFFF"/> Email: info@animalandia.com</li>
           </ul>
        </Col>
        <Col>
           <ul className="text-start ms-5 pt-4 ps-5">
            <li className="pb-1"> <a href="#" className="links"><FontAwesomeIcon icon={faFacebook} size="2x" color="#FFFFFF"/>  Veterinaria Animalandia</a></li>
            <li className="py-1"> <a href="#" className="links"><FontAwesomeIcon icon={faInstagram} size="2x" color="#FFFFFF"/>  Veterinaria.Animalandia</a></li>
            <li className="py-1"> <a href="#" className="links"><FontAwesomeIcon icon={faThreads} size="2x" color="#FFFFFF"/>  Veterinaria.Animalandia</a></li>
            <li className="py-1"> <a href="#" className="links"><FontAwesomeIcon icon={faTwitter} size="2x" color="#FFFFFF"/>  Veterinaria.Animalandia</a></li>
           </ul>
        </Col>
        <Col> 
            <p>Contáctanos Via Whatsapp</p>
            <Image src="/src/assets/codigoQR.png" rounded className="imagenqr" width={200} height={200}></Image>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
