import CardPlan from "./subcomponents/CardPlan";
import "../../App.css";
import Productos from "./subcomponents/Productos";
import CentroMedico from "./subcomponents/CentroMedico";
import Profesionales from "./subcomponents/Profesionales";
import AdPopup from "./subcomponents/AdPopup";
import Comentarios from "./subcomponents/Comentarios";

const PaginaPrincipal = () => {
  return (
    <div>
      <section className="mainSection" id="section1">
        <h1 className="ps-3 letraPersonalizada2 text-danger pt-2 mt-3 overlay">
          ANIMALANDIA AL SERVICIO DE SUS PATITAS
        </h1>
        <div className="col-4 fs-2 ps-3 pt-5 mt-5 overlay">
          <p>
            Contamos con un equipo de profesionales altamente capacitados para
            brindar una excelente atención. Accede a uno de nuestros planes y
            lleva la mejor cobertura acorde a las necesidades de tu mascota.
          </p>
        </div>
        <video loop autoPlay muted className="fondoVideo">
          <source
            src="../src/assets/video.mp4"
            type="video/mp4"
          />
        </video>
      </section>
      <section className="container-fluid px-5 pb-3">
        <h2 className="text-center py-3 display-4">
          Nuestros planes para tu mascota
        </h2>
        <CardPlan></CardPlan>
      </section>
      <section>
        <CentroMedico></CentroMedico>
      </section>
      <section>
        <Profesionales></Profesionales>
      </section>
      <section>
        <Productos></Productos>
      </section>
      <Comentarios></Comentarios>
      <AdPopup></AdPopup>
    </div>
  );
};

export default PaginaPrincipal;
