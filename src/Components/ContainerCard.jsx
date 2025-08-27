import CardCompon from "./CardCompon";

const ContainerCard = ({ nuevasPelis }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {nuevasPelis.map((peli, index) => (
          <div key={index} className="col-12 col-md-3 mb-4">
            <CardCompon
              nombre={peli.nombre}
              genero={peli.genero}
              descripcion={peli.descripcion}
              imagen={peli.imagenURL}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContainerCard;
