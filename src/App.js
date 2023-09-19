import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './pages/SignIn';
import CreateAccount from './pages/CreateAccount';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={SignIn} />
        <Route path="/create-account" Component={CreateAccount} />
      </Routes>
    </Router>
  );
}

export default App;
