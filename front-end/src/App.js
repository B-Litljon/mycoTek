import React from 'react';
import 'bulma/css/bulma.min.css';
import SignUpPage from './components/signup';

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