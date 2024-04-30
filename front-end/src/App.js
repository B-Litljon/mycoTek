import React from 'react';
import 'bulma/css/bulma.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react'; 
import SignUpPage from './components/pages/Signup';
import LoginPage from './components/pages/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <SignUpPage />
        </div>
      </section>
    </div>
  );
}

export default App;