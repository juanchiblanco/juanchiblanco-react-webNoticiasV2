import Form from "react-bootstrap/Form";
import ListaNoticias from "./ListaNoticias";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const Formulario = () => {
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [mostrarSpinner, setMostrarSpinner] = useState(true);
  const [pais, setPais] = useState("");

  useEffect(() => {
    if (categoria) {
      obtenerNoticia();
    }
  }, [categoria, pais]);

  const selectCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const selectPais = (e) => {
    setPais(e.target.value);
  };

  const obtenerNoticia = async () => {
    try {
      setMostrarSpinner(true);
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_39be840985964a1b9e2afa61a8e79d96&category=${categoria}&country=${pais}&language=es`
      );
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setNoticias(datos.results);
      }
      setMostrarSpinner(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="container d-flex justify-content-center">
        <div className="border border-light-subtle px-3 rounded mt-3 w-50 shadow">
          <Form className="my-4">
            <Form.Group className="d-flex gap-3">
              <Form.Label>Buscar por categoria:</Form.Label>
              <Form.Select
                aria-label="defaultSelect"
                onChange={selectCategoria}
                value={categoria}
              >
                <option>Elige una opcion</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="general">General</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="crime">Crime</option>
                <option value="domestic">Domestic</option>
                <option value="education">Education</option>
                <option value="environment">Environment</option>
                <option value="food">Food</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="top">Top</option>
                <option value="tourism">Tourism</option>
                <option value="world">World</option>
                <option value="technology">Technology</option>
                <option value="other">Other</option>
              </Form.Select>
              <Form.Select
                aria-label="defaultSelect"
                onChange={selectPais}
                value={pais}
              >
                <option value="">Elige un país</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="mx">Mexico</option>
                <option value="br">Brazil</option>
                <option value="ar">Argentina</option>
                <option value="gb">United Kingdom</option>
                <option value="fr">France</option>
                <option value="de">Germany</option>
                <option value="it">Italy</option>
                <option value="es">Spain</option>
                <option value="nl">Netherlands</option>
                <option value="be">Belgium</option>
                <option value="ch">Switzerland</option>
                <option value="at">Austria</option>
                <option value="pt">Portugal</option>
                <option value="ie">Ireland</option>
                <option value="se">Sweden</option>
                <option value="no">Norway</option>
                <option value="dk">Denmark</option>
                <option value="fi">Finland</option>
                <option value="ru">Russia</option>
                <option value="cn">China</option>
                <option value="jp">Japan</option>
                <option value="kr">South Korea</option>
                <option value="in">India</option>
                <option value="za">South Africa</option>
                <option value="ng">Nigeria</option>
                <option value="eg">Egypt</option>
                <option value="au">Australia</option>
                <option value="nz">New Zealand</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
      </section>
      <article className="border-top border-light-subtle my-4 container-fluid">
        {mostrarSpinner === true ? (
          <div className="my-4 text-center">
            <Spinner animation="grow" variant="light" />
          </div>
        ) : (
          <ListaNoticias noticias={noticias} />
        )}
      </article>
    </>
  );
};

export default Formulario;
