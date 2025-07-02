import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <main>
        <Titulo />
        <Formulario />
      </main>
      <footer className="bg-dark-subtle text-light text-center py-3">
        <p>&copy;Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
