import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardCompon = ({ nombre, genero, descripcion, imagenURL }) => {
  return (
    <Card className="h-100 shadow border-1 rounded-1">
      <Card.Img variant="top" src={imagenURL} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          <strong>Género:</strong> {genero}
          <br />
          <strong>Descripción:</strong> {descripcion}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardCompon;
