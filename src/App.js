import logo from './logo.svg';
import './App.css';
import './components/todos'
import { Todos } from './components/todos';
import { Goals } from './components/goals';
function App() {
  return (
    <div className="App">
      <Todos/>
      <Goals/>
    </div>
  );
}

export default App;
