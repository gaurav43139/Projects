import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
import AppReducer from "./AppReducer.js";

//Initial State
const initialState = {
//     transactions: [
//    { id: 1, text: 'Flower', amount: -20 },
//    { id: 2, text: 'Salary', amount: 300 },
//    { id: 3, text: 'Book', amount: -10 },
//    { id: 4, text: 'Camera', amount: 150 }
//     ]
     transactions:[]
}

//Create context
export const GlobalContext=createContext(initialState);

//Provider content
//The provided code defines a React component named GlobalProvider using an arrow function. This component is designed to manage and provide global state to its child components. It uses the useReducer hook, which is a React hook that helps manage complex state logic by dispatching actions to a reducer function. In this case, useReducer takes two arguments: AppReducer, which is the reducer function that defines how the state should change in response to actions, and initialState, which is the initial state value.Within the GlobalProvider component, the useReducer hook returns an array with two elements: state and dispatch. The state represents the current state managed by the reducer, and dispatch is a function that allows you to send actions to the reducer to update the state.The GlobalProvider component returns a GlobalContext.Provider component, which is a context provider from React's Context API. The value prop of the GlobalContext.Provider is set to an object containing the transactions property from the current state. This means that any component within the GlobalContext.Provider tree can access the transactions state via the context.Finally, the children prop is used to render any child components that are wrapped by the GlobalProvider. This setup allows the GlobalProvider to encapsulate the global state logic and make it available to any nested components, promoting a clean and maintainable state management pattern in the application.



export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        //here the value can also be  just state
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,addTransaction
            }
         }> 
            {children}
        </GlobalContext.Provider>
    );
}