import React, { useState } from "react";
import { useUserData } from "./userDataContext";

const Withdraw = () => {
  const { addSubmission, state } = useUserData();
  let data = [
    state.userSubmissions.reduce((acc, obj) => {
      // Iterate over each property of the current object
      Object.entries(obj).forEach(([key, value]) => {
        // If the property value is not empty, assign it to the accumulator object
        if (value !== "") {
          acc[key] = value;
        }
      });
      return acc;
    }, {}),
  ];
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [balance, setBalance] = useState(1000+parseInt(data.map((submission, index) => submission.depositedAmount))); // Example initial balance
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
 

  
 // console.log("datadatadata123", data.map((submission, index) => submission.withdrawlAmount));
  const handleWithdraw = (e) => {
    e.preventDefault();

    // Validate withdraw amount
    const amount = parseFloat(withdrawAmount);
    let withdrawlAmount = amount;

    if (isNaN(amount)) {
      setErrorMessage("Please enter a valid number");
    } else if (amount <= 0) {
      setErrorMessage("Please enter a positive amount");
    } else if (amount > balance) {
      setErrorMessage("Insufficient funds");
    } else {
      // Update balance and show success message
      setBalance((prevBalance) => prevBalance - amount);
      setWithdrawAmount("");
      setSuccessMessage(
        `Withdrawal of $${amount.toFixed(2)} successful. New balance: $${(
          balance - amount
        ).toFixed(2)}`
      );
      setErrorMessage("");
    }
    addSubmission({
      name: "",
      email: "",
      withdrawlAmount,
      depositedAmount: "",
    });
  };

  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-body">
          <h5 className="card-title">Withdraw</h5>
          {successMessage && (
            <div className="alert alert-success">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          <div className="mb-3">
            <p className="card-text">Current Balance: ${balance}</p>
          </div>
          <form onSubmit={handleWithdraw}>
            <div className="mb-3">
              <label htmlFor="withdrawAmount" className="form-label">
                Withdraw Amount
              </label>
              <input
                type="number"
                className="form-control"
                id="withdrawAmount"
                placeholder="Enter withdraw amount"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!withdrawAmount}
            >
              Withdraw
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
