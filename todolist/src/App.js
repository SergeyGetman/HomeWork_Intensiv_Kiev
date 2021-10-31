import './App.css';
import Todos from './components/Todos';
import DisplayTodos from './components/DisplayTodos';

function App() {
  return (
    <div className="App">
      <Todos />,
      <DisplayTodos />
    </div>
  );
}

export default App;
