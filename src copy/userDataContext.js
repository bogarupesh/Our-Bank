import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  userSubmissions: []
};

// Action types
const ADD_SUBMISSION = 'ADD_SUBMISSION';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_SUBMISSION:
      return {
        ...state,
        userSubmissions: [...state.userSubmissions, action.payload],

        name:action.payload
      };
    default:
      return state;
  }
};

// Context
const UserDataContext = createContext();

// Provider component
export const UserDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addSubmission = (submission) => {
    dispatch({ type: ADD_SUBMISSION, payload: submission });
  };

  return (
    <UserDataContext.Provider value={{ state, addSubmission }}>
      {children}
    </UserDataContext.Provider>
  );
};

// Custom hook to use UserDataContext
export const useUserData = () => useContext(UserDataContext);
