import './App.css';
import ShipDetail from './components/ShipDetail';
// import SearchList from './components/SearchList';
import Starships from './components/Starships';
import { ShipsProvider } from './context/ShipsContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <ShipsProvider>
          {/* <Starships></Starships> */}
          {/* <SearchList></SearchList> */}
          <Routes>
            <Route path="/" Component={Starships} />
            <Route path='/ship/:shipId' Component={ShipDetail}/>
          </Routes>
        </ShipsProvider>
      </Router>
    </div>
  );
}

export default App;
