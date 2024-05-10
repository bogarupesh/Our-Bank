import React, { useState } from 'react';
import './CreateAccount.css';
import { useUserData } from './userDataContext';


const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showAddAnother, setShowAddAnother] = useState(false);
  const { state, addSubmission } = useUserData();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!name.trim()) {
      alert('Please enter your name');
      return;
    }

    if (!email.trim()) {
      alert('Please enter your email address');
      return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }

    // Show success message and reset form
    setSuccessMessage('Account created successfully!');
    addSubmission({ name, email, depositAmount:'',withdrawlAmount:'',}); // Assuming initial amount is 0 for new accounts
    setShowAddAnother(true);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-body">
          <h5 className="card-title">Create Account</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" disabled={!name.trim() || !email.trim() || password.length < 8}>Create Account</button>
          </form>
          {successMessage && (
            <div className="alert alert-success mt-3" role="alert">
              {successMessage}
              {showAddAnother && <button className="btn btn-secondary ms-2" onClick={() => {
                setSuccessMessage('');
                setShowAddAnother(false);
              }}>Add Another Account</button>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
