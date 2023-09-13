import { Button } from "react-bootstrap";

const ItemMascotas = () => {
    return (
        <>
            <tr>
            {/* <td>{props.producto._id}</td> */}
            <td>1</td>
            <td>Nombre</td>
            <td>Especia</td>
            <td>Raza</td>
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

export default ItemMascotas;