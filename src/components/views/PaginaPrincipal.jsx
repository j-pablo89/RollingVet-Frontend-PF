import CardPlan from "./subcomponents/CardPlan";
import "../../App.css";
import Productos from "./subcomponents/Productos";
import CentroMedico from "./subcomponents/CentroMedico";
import Profesionales from "./subcomponents/Profesionales";
import AdPopup from "./subcomponents/AdPopup";
import Comentarios from "./subcomponents/Comentarios";
import Video from "./subcomponents/Video";
import Servicios from "./subcomponents/Servicios";

const PaginaPrincipal = () => {
  return (
    <div>
      <Video></Video>
      <CardPlan></CardPlan>
      <Servicios></Servicios>
      <CentroMedico></CentroMedico>
      <Profesionales></Profesionales>
      <Productos></Productos>
      <Comentarios></Comentarios>
      <AdPopup></AdPopup>
    </div>
  );
};

export default PaginaPrincipal;
