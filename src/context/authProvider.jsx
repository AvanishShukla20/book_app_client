import React, { useState } from 'react'
import { useContext } from 'react';
import { createContext } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    //get user from local storage
    const initialUser = localStorage.getItem("user");
  
    // manage states
    const [authUser, setAuthUser] = useState(
        initialUser? JSON.parse(initialUser):undefined
    );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
        {children}
    </AuthContext.Provider>
  )
}

/// custom hook for ease of usage
export const useAuth = () => useContext(AuthContext);

export default AuthProvider
