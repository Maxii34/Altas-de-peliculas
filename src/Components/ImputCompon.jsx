import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const ImputPelis = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const pelisLocalStorage = JSON.parse(localStorage.getItem("pelis")) || [];
  const [ImputPelis, setPelis] = useState(pelisLocalStorage);

  const guardarPelis = (nuevasPelis) => {
    localStorage.setItem("pelis", JSON.stringify(nuevasPelis));
  };

  const validacion = (data) => {
    console.log(data);
    const nuevaPeli = {
      ...data,
      id: Date.now(),
    };
    const nuevasPelis = [...ImputPelis, nuevaPeli];
    setPelis(nuevasPelis);
    guardarPelis(nuevasPelis);
    reset();
  };

  return (
    <section className="container mt-5">
      <Form onSubmit={handleSubmit(validacion)}>
        <Form.Group className="mb-3" controlId="campoNombre">
          <Form.Label>Nombre de la pelicula.</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre"
            {...register("nombre", {
              required: "El nombre es obligatorio",
              minLength: { value: 2, message: "La cantidad mínima de caracteres es 2" },
              maxLength: { value: 20, message: "La cantidad máxima de caracteres es 20" },
              validate: (value) => value.trim().length > 0 || "No puede estar vacía o ser solo espacios",
            })}
          />
          {errors.nombre && <span className="text-danger">{errors.nombre.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="campoGenero">
          <Form.Label>Género</Form.Label>
          <Form.Select
            defaultValue=""
            {...register("genero", { required: "Debe seleccionar un género" })}
          >
            <option value="" disabled>Seleccione un género.</option>
            <option value="comedia">Comedia</option>
            <option value="drama">Drama</option>
            <option value="infantil">Infantil</option>
            <option value="anime">Anime</option>
          </Form.Select>
          {errors.genero && <span className="text-danger">{errors.genero.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="campoDescripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Ingrese la descripción"
            {...register("descripcion", {
              required: "La descripción es obligatoria",
              minLength: { value: 10, message: "La cantidad mínima de caracteres es 5" },
              maxLength: { value: 100, message: "La cantidad máxima de caracteres es 100" },
              validate: (value) => value.trim().length > 0 || "No puede estar vacía o ser solo espacios",
            })}
          />
          {errors.descripcion && <span className="text-danger">{errors.descripcion.message}</span>}
        </Form.Group>

        <button type="submit" className="btn btn-primary">Guardar</button>
      </Form>
    </section>
  );
};

export default ImputPelis;
