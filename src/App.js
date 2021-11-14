import Tabla from './components/Tabla.jsx';
import Nav from './components/Nav';
import Input from './components/Input';
import Select from './components/Select.jsx';
import './App.css';

function App() {
  return (
    <>
      {/* <img className="imgFondo" src="https://www.santander.com/es/stories/guia-para-saber-que-son-las-criptomonedas/_jcr_content/root/story/bottomParsys/resource_composer/resource-composer__composition-three-2.coreimg.jpeg/1612548160888/im-storie-guia-para-saber-que-son-las-criptomonedas-3.jpeg" alt="fondo de pantalla" /> */}
      <Nav />
      <Input />
      <Select />
      <Tabla />
    </>
  );
}

export default App;
