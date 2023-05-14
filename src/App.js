import './App.css';
import './styles/Nav.css'
import './styles/Trivia.css'
import Nav from './components/Nav.tsx';
import TriviaForm from './components/TriviaForm.tsx';
import Trivia from './components/Trivia.tsx';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Trivia/>
    </div>
  );
}

export default App;
