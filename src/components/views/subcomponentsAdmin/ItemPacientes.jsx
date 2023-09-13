import { Button } from "react-bootstrap";
import ItemMascotas from "./ItemMascotas";

const ItemPacientes = () => {
    return (
        <>
            <tr className="align-items-center">
            {/* <td>{props.producto._id}</td> */}
            <td>1</td>
            <td>Juan</td>
            <td>Pérez</td>
            <td>juanperez@live.com.ar</td>
            <td>3816191817</td>
            <td>Cordoba 566</td>
            <td className="d-flex justify-content-between">
                <Button className="btn btn-warning me-4">Editar</Button>
                <Button variant="danger">
                Borrar
                </Button>
            </td>
            </tr>
        </>
    );
};

export default ItemPacientes;