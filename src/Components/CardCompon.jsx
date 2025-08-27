import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardCompon = ({ nombre, genero, descripcion }) => {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardCompon;
