import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(() => {
        const storedData = localStorage.getItem('authData');
        return storedData ? JSON.parse(storedData) : null;
    });

    useEffect(() => {
        // This useEffect could be used for any side effects related to authData changes.
        // For example, performing cleanup on logout:
        if (authData === null) {
            console.log("User logged out, performing cleanup.");
            // Place cleanup actions here, like clearing session-specific data
        }
        // Add more conditions as needed for other authData changes.
    }, [authData]); // Reacts to changes in authData.

    const login = (data) => {
        setAuthData(data);
        localStorage.setItem('authData', JSON.stringify(data));
        console.log("User logged in, auth data set.");
    };

    const logout = () => {
        setAuthData(null);
        localStorage.removeItem('authData');
        console.log("User logged out, auth data cleared.");
    };

    const isLoggedIn = () => {
        return authData !== null;
    };

    const value = {
        authData,
        login,
        logout,
        isLoggedIn,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};