import { Button, Table } from "react-bootstrap";
import ItemTurno from "./subcomponentsAdmin/ItemTurno";
import "../../App.css";

const Administrador = () => {
    return (
        <div className="mifondo2">
        
         <section className="container mainSection">
        <div className="mt-5 text-center">
          <h1 className="display-4 text-center">Administrador</h1>
          <span className="text-center">SystemWeb v1.0</span>
        </div>
        <hr />
        <h2 className="text-center">Proximos Turnos</h2>
        <Table responsive striped bordered hover className="border border-2 border-danger-subtle">
          <thead>
            <tr>
              <th>Cod</th>
              <th>Detalle</th>
              <th>Veterinario</th>
              <th>Mascota</th>
              <th>Fecha</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
           <ItemTurno></ItemTurno>
          </tbody>
        </Table>
      </section>
    </div>
    );
};

export default Administrador;