import './App.css';
import './styles/Nav.css'
import Nav from './components/Nav.tsx';
import TriviaForm from './components/TriviaForm.tsx';

function App() {
  return (
    <div className="App">
      <Nav/>
      <TriviaForm/>
    </div>
  );
}

export default App;
