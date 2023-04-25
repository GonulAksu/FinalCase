import './App.css';
import Starships from './components/Starships';
import { ShipsProvider } from './context/ShipsContext';

function App() {
  return (
    <div className="App">
      <ShipsProvider>
        <Starships></Starships>
      </ShipsProvider>
    </div>
  );
}

export default App;
