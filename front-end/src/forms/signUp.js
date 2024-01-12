import React, { useState } from 'react';
import InputField from '../components/inputField';
function SignUpPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
  });
  const [error, setError] = useState(''); // sends error message to user when duplicate username is entered 

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); 

    const url = 'http://localhost:3500/users' 
    const body =  formData ;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error creating user ');
      }     

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
            <h1 className="title is-4">Sign Up</h1>
            {/* Username Field */}
            <InputField
                type="text"
                name="username"
                label="Username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
            />
            {/* Email Field */}
            <InputField
                type="email"
                name="email"
                label="Email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            {/* Password Field */}
            <InputField
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
            {/* Confirm Password Field */}
            <InputField
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
            />
            {/* Submit Button */}
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-primary is-fullwidth">
                  Create account 
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
 )};
  
export default SignUpPage;