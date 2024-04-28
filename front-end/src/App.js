import React from 'react';
import 'bulma/css/bulma.min.css';
import SignUpPage from './components/pages/Signup';
import LoginPage from './components/pages/Login';

function App() {
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