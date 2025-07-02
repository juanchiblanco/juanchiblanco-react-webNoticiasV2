import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Noticia = ({noticia}) => {
  return (
    <Card className="h-100">
      <Card.Header className="shadow bg-light text-dark h-100">
        <p className="fs-5 text-uppercase text-start">{noticia.country}</p>
        <img src={noticia.image_url
|| "https://hsconsultinggroup.net/wp-content/themes/consultix/images/no-image-found-360x250.png"} alt={noticia.title} className="img-fluid imgCard"/>
        <p className="lead text-center">{noticia.title} </p>
      </Card.Header>
      <Card.Body className="text-center border-top border-bottom border-light subtle h-100">
        <p className="text-truncate">{noticia.description}</p>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center">
        <a href={noticia.link}><Button>Ver noticia completa</Button></a>
      </Card.Footer>
    </Card>
  );
};

export default Noticia;
