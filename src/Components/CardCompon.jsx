import { Card } from "react-bootstrap";

const CardCompon = ({ id, nombre, genero, descripcion, imagen, borrarPeli }) => {
  return (
    <Card className="h-100 shadow">
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          <strong>Género:</strong> {genero}
          <br />
          <strong>Descripción:</strong> {descripcion}
        </Card.Text>
        <button
          className="btn btn-danger btn-sm shadow"
          onClick={() => borrarPeli(id)}
        >
          Eliminar
        </button>
      </Card.Body>
    </Card>
  );
};

export default CardCompon;