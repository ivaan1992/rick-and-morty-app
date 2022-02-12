import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
// import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Body from './components/Body';

const App = () => (
  <div className="App">
    <Header />
    <Body />
  </div>
);
export default App;
