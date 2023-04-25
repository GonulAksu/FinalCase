import './App.css';
// import SearchList from './components/SearchList';
import Starships from './components/Starships';
import { ShipsProvider } from './context/ShipsContext';

function App() {
  return (
    <div className="App">
      <ShipsProvider>
        <Starships></Starships>
        {/* <SearchList></SearchList> */}
      </ShipsProvider>
    </div>
  );
}

export default App;
