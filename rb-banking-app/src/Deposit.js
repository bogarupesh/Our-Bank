import React, { useState } from 'react';
import { useUserData } from './userDataContext';

const Deposit = () => {
  const [depositAmount, setDepositAmount] = useState('');
  const [balance, setBalance] = useState(0); // Example initial balance
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { state,addSubmission } = useUserData();

  const handleDeposit = (e) => {
    e.preventDefault();

    // Validate deposit amount
    const amount = parseFloat(depositAmount);
    let depositedAmount = amount;

    if (isNaN(amount)) {
      setErrorMessage('Please enter a valid number');
    } else if (amount <= 0) {
      setErrorMessage('Please enter a positive amount');
    } else {
      // Update balance and show success message
      setBalance(prevBalance => prevBalance + amount);
      setDepositAmount('');
      setSuccessMessage(`Deposit of $${amount.toFixed(2)} successful. New balance: $${(balance + amount).toFixed(2)}`);
      setErrorMessage('');
    }
    addSubmission({ name: '', email: '', depositedAmount, withdrawlAmount:''});
  };

  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-body">
          <h5 className="card-title">Deposit</h5>
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          <div className="mb-3">
            <p className="card-text">Current Balance: ${balance}</p>
          </div>
          <form onSubmit={handleDeposit}>
            <div className="mb-3">
              <label htmlFor="depositAmount" className="form-label">Deposit Amount</label>
              <input type="number" className="form-control" id="depositAmount" placeholder="Enter deposit amount" value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" disabled={!depositAmount}>Deposit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
