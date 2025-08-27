import { Card } from "react-bootstrap";

const CardCompon = ({ id, nombre, genero, descripcion, imagen, borrarPeli }) => {
  return (
    <Card className="h-100 shadow-card">
      <Card.Img variant="top" className="img-peli" src={imagen || "https://www.datoposta.com/wp-content/uploads/2024/06/BAD-BOYS-4.jpg"} />
      <Card.Body className="d-flex flex-column borderTop">
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