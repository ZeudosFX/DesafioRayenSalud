import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from 'react-router-dom'
import ListaTutoriales from './container/ListaTutoriales';
import NuevoTutorial from './container/NuevoTutorial';
import EditarTutorial from './container/editarTutorial';

function App() {
  return (
    <div>
      <Route exact path="/" component={ListaTutoriales}/>
      <Route exact path="/nuevo-tutorial" component={NuevoTutorial }/>
      <Route exact path="/editar-tutorial" component={EditarTutorial}/>
    </div>
  );
}

export default App;
