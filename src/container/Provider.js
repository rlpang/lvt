import React, { createContext  } from 'react';

export const UserContext = createContext();

export const UserProvider = props =>{
        const title = "Live Visibility Tracker"
    
        return <UserContext.UserProvider title={title}> {props.children} </UserContext.UserProvider>
};