import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import BoxGame from './components/BoxGame';
import History from './components/History';
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/box-game" element={<BoxGame />}/>
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
