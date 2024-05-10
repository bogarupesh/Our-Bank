import React from 'react';
import { useUserData } from './userDataContext';

const AllData = () => {
  const { state } = useUserData();

 
let data = [state.userSubmissions.reduce((acc, obj) => {
  // Iterate over each property of the current object
  Object.entries(obj).forEach(([key, value]) => {
      // If the property value is not empty, assign it to the accumulator object
      if (value !== "") {
          acc[key] = value;
      }
  });
  return acc;
}, {})]


  return (
    <div className="container">
      <div className="card mt-54 alldata">
        <div className="card-body">
          <h5 className="card-title">All Data</h5>
          
          {state.userSubmissions.length === 0 ? (
            <p>No data available</p>
          ) : (
            <div className="table-responsive">
             
             
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Deposit</th>
                    <th>Withdraw</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((submission, index) => (
                    <>
                      <tr key={index}>
                      <td>{submission.name}</td>
                      <td>{submission.email}</td>
                      <td>{submission.depositedAmount}</td>
                      <td>{submission.withdrawlAmount}</td>
                      <td>{parseInt(submission.depositedAmount-submission.withdrawlAmount)}</td>
                    </tr>
                    <tr>
                      <td>{"test1"}</td>
                      <td>{"test1@gmail.com"}</td>

                      <td>{"100"}</td>
                      <td>{"20"}</td>
                      <td>{"80"}</td>
                    </tr>
                    <tr>
                      <td>{"test2"}</td>
                      <td>{"test2@gmail.com"}</td>
                      <td>{"200"}</td>
                      <td>{"40"}</td>
                      <td>{"160"}</td>
                    </tr>
                    </>
                  
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllData;
