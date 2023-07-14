import logo from './logo.svg';
import './App.css';
import StartPage from './components/Start';
import { Route , Routes } from 'react-router-dom';
import Home from './components/Home';
import { BrowserRouter as Router} from "react-router-dom";
import Inventory from './components/Inventory';
import Taxes from './components/Taxes';
import Transact from './components/Transaction';
import { Provider } from 'react-redux';
import store from './App/store';
import SecBack from './components/SecBack';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inv" element={<Inventory />} />
          <Route path="/taxes" element={<Taxes />} />
          <Route path="/trans" element={<Transact/>} />
          <Route path="/sec" element={<SecBack />} />
        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
