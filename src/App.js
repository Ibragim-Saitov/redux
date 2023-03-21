import './App.css';
import Todos from './Todos';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container w-50">
      <Input/>
      <Todos/>
    </div>
  );
}

export default App;