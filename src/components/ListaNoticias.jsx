import Noticia from "./Noticia";

const ListaNoticias = ({ noticias }) => {
  return (
    <div className="row justify-content-center my-3 row-gap-4">
      {noticias.lenght == 0 ? (
        <p className="text-center">No hay noticias disponibles.</p>
      ) : (
        noticias.map((noticia, indice) => (
          <div className="col-12 col-md-4 col-lg-3" key={indice}>
            <Noticia noticia={noticia} />
          </div>
        ))
      )}
    </div>
  );
};

export default ListaNoticias;
