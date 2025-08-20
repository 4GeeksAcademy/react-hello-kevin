function CardItem({ imagen, titulo, descripcion, alt }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={imagen} className="card-img-top img-fluid" alt={alt} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default CardItem;