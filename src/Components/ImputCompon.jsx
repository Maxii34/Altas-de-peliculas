import Form from "react-bootstrap/Form";

const ImputPelis = () => {
  return (
    <section className="container mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="campoNombre">
          <Form.Label>Nombre de la pelicula.</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="campoGenero">
          <Form.Label>Género</Form.Label>
          <Form.Select defaultValue="">
            <option value="" disabled>
              Seleccione un género.
            </option>
            <option value="comedia">Comedia</option>
            <option value="drama">Drama</option>
            <option value="infantil">Infantil</option>
            <option value="anime">Anime</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="campoDescripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Ingrese la descripción"
          />
        </Form.Group>

        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </Form>
    </section>
  );
};

export default ImputPelis;
