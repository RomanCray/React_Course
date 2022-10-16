import logo from './logo.svg';
import './App.css';
// import { Welcome } from './components/js/Welcome';
import { Contact } from './components/View/contacts'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Pag_profile } from './components/View/profile';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <br />
        <Router>
          <div>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/contacto'>Contact</Link>
              </li>
              <li>
                <Link to='/profile'>Perfil</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path='/contacto' element={<Contact />} />
            <Route path='/profile/:name' element={<Pag_profile />} />
          </Routes>
        </Router>

        {/* <Welcome
          message="hola que hace"
          name="pol"
          ac1pt="Santi" /> */}
      </header>
    </div>
  );
}

export default App;
