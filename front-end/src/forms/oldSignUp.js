import React, { useState } from 'react';

function SignUpPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
  });

  const [error, setError] = useState(''); // sends error message to user when duplicate username is entered
  const [isSignup, setIsSignup] = useState(true); 
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error on new submission

    const url = `http://localhost:3500/users/${isSignup ? 'users' : 'login'}`; // Adjust endpoint based on mode

    const body = isSignup ? formData : {
      username: formData.username,
      password: formData.password
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || (isSignup ? 'Error creating user' : 'Error logging in'));
      }

      console.log(isSignup ? 'User created:' : 'User logged in:', data);
      // Further actions upon successful signup/login (like redirect or state update)
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-half">
  
          {/* Display error message if error exists */}
          {error && (
            <div className="notification is-danger">
              {error}
            </div>
          )}
  
          <form onSubmit={handleSubmit} className="box">
            <h1 className="title has-text-centered">{isSignup ? 'Signup' : 'Signin'}</h1>
  
            {/* Username Field */}
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input 
                  className="input" 
                  type="text" 
                  name="username" 
                  placeholder="Username" 
                  value={formData.username} 
                  onChange={handleChange} 
                />
              </div>
            </div>
  
            {/* Email Field - Only for Signup */}
            {isSignup && (
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                  />
                </div>
              </div>
            )}
  
            {/* Password Field */}
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input 
                  className="input" 
                  type="password" 
                  name="password" 
                  placeholder="Password" 
                  value={formData.password} 
                  onChange={handleChange} 
                />
              </div>
            </div>
  
            {/* Confirm Password Field - Only for Signup */}
            {isSignup && (
              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="password" 
                    name="confirmPassword" 
                    placeholder="Confirm Password" 
                    value={formData.confirmPassword} 
                    onChange={handleChange} 
                  />
                </div>
              </div>
            )}
  
            {/* Submit Button */}
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-primary is-fullwidth">
                  {isSignup ? 'Sign Up' : 'Sign In'}
                </button>
              </div>
            </div>
  
            {/* Toggle between Sign In and Sign Up */}
            <button onClick={() => setIsSignup(!isSignup)} className="button is-text">
              {isSignup ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </div>
 )};
  

export default SignUpPage;