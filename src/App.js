
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Landing/Home';
import Header from "./Component/Header/Header";
import Login from "./Component/Login/Login";
import CreateAccount from "./Component/CreateAccount/CreateAccount";
import SearchFlight from './Component/SearchFlight/SearchFlight';
import ForgotPassword from './Component/ForgotPassword/Forget';
import Dashboard from './Component/Dashboard/Dashboard';
import Otp from './Component/OTP/Otp';

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/searchFlight" element={<SearchFlight/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/createAccount" element={<CreateAccount/>}/>
            <Route path="/forgot" element={<ForgotPassword/>}/>
            <Route path="/dash" element={<Dashboard/>}/>
            <Route path="/otp" element={<Otp/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
