import './App.css';
import Container from './components/Container';
import ShipDetail from './components/ShipDetail';
import Starships from './components/Starships';
import { ShipsProvider } from './context/ShipsContext';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <ShipsProvider>
            <Container></Container>
            <Routes>
              <Route path='/' Component={Starships} />
              <Route path='/ship/:shipId' Component={ShipDetail} />

            </Routes>
          </ShipsProvider>
        </Router>
      </div>
    </>
  );
}

export default App;
