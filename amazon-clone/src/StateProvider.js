import React, {createContext, useContext, useReducer} from 'react';

//Prepares the data layer
export const StateContext = createContext();

// Wrap our app and provide data layer to every component. 
export const StateProvider = ({ reducer, initialSate, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialSate)}>
        {children}
    </StateContext.Provider>
);

//Pull info from data layer. 
export const useStateValue = () => useContext(StateContext)