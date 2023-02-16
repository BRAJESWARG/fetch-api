// Context creation 
// Provider 
// Consumer removed
// useContext hook 

import React, { useContext, useReducer } from "react";

const AppContext = React.createContext();

// const [state, dispatch] = useReducer{}

const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={"Brajeswar"}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };