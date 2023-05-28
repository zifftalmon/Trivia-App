import './App.css';
import './styles/Nav.css'
import './styles/Trivia.css'
import Nav from './components/Nav.tsx';
import Trivia from './components/Trivia.tsx';
import TriviaForm from './components/TriviaForm.tsx';
import {HashRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
