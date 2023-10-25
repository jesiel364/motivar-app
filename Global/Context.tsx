import React, { createContext } from "react"
import {useState} from 'react'

export interface ContextProps {
    theme?: string
    author?: string
    children?: any
    setTheme?: React.SetStateAction<string>
    setAuthor?: React.SetStateAction<string>
    setShowCheck?: React.SetStateAction<string>
    showCheck?: React.SetStateAction<string>
}

const MyContext = createContext({})

const MyProvider = ({children}:ContextProps) => {
    const [theme, setTheme ] = useState('Light')
    const [author, setAuthor] = useState('')
    const [showCheck, setShowCheck] = useState(false);


    return (
        <MyContext.Provider value={{theme, setTheme, author, setAuthor, showCheck, setShowCheck}}>
            {children}
        </MyContext.Provider>
    )
}

export {MyContext, MyProvider}