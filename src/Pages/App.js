import '../Assets/Css/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Home, Navbar} from "../Components/Index";


function App() {
  return (
    <div>
        <Navbar />
        <Home />
    </div>

  );
}

export default App;
