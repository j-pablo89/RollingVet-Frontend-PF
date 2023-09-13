import { Table } from 'react-bootstrap';
import ItemPacientes from './ItemPacientes';

const AdministrarPacientes = () => {
    return (
        <div className="mifondo2">
        <section className="container mainSection">
       <div className="mt-5 text-center">
         <h2 className="display-6 text-start">Administracion de Pacientes</h2>
       </div>
       <hr />
       <Table responsive striped bordered hover className="border border-2 border-danger-subtle">
         <thead>
           <tr>
             <th>Cod</th>
             <th>Nombre</th>
             <th>Apellido</th>
             <th>Email</th>
             <th>Telefono</th>
             <th>Direccion</th>
             <th>Acciones</th>
           </tr>
         </thead>
         <tbody>
          <ItemPacientes></ItemPacientes>
         </tbody>
       </Table>
     </section>
   </div>
    );
};

export default AdministrarPacientes;