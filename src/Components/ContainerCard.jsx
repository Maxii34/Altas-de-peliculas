import CardCompon from "./CardCompon";

const ContainerCard = ({ nuevasPelis, borrarPeli }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {nuevasPelis.map((peli, index) => (
          <div key={index} className="col-12 col-md-3 mb-4">
            <CardCompon
              id={peli.id}
              nombre={peli.nombre}
              genero={peli.genero}
              descripcion={peli.descripcion}
              imagen={peli.imagen}
              borrarPeli={() => borrarPeli(peli.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContainerCard;
