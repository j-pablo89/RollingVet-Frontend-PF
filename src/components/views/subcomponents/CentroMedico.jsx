import { Carousel, Image } from "react-bootstrap";

const CentroMedico = () => {
  return (
    <div className="container">
        <hr />
        <h2 className='text-center py-3 display-4'>Nuestras Instalaciones</h2>
      <Carousel fade>
        <Carousel.Item className="text-center">
          <Image width={1200} height={600} src="https://estudioniddo.com/wp-content/uploads/2018/02/galeria_24-2048x1365.jpg" rounded />          
          <Carousel.Caption>
            <h2 className="text-danger letraPersonalizada1">Una sala de espera confortable con un diseño único</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <Image width={1200} height={600} src="https://interioresminimalistas.com/wp-content/uploads/2017/02/clinica-veterinaria-constitucion-dobleese-1.jpg" rounded />
          <Carousel.Caption>
            <h2 className="text-danger letraPersonalizada1">Contamos con nuestro salón de belleza y peluquería</h2>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <Image width={1200} height={600} src="https://interioresminimalistas.com/wp-content/uploads/2017/02/clinica-veterinaria-constitucion-dobleese-12.jpg" rounded />          
          <Carousel.Caption>
            <h2 className="text-danger letraPersonalizada1">Consultorios equipados con lo último en intervenciones quirúrgicas</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CentroMedico;
