import React,{createContext,useState } from 'react'

export const CardContext = createContext (null)

export const CardProvider = (props) => {

    const [Items,SetItems] = useState([])

    return (
        <CardContext.Provider value={{Items,SetItems}}  >
            {props.children}
        </CardContext.Provider>
    )
}
