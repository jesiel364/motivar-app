import React, { createContext } from "react"
import {useState} from 'react'

export default interface ContextProps {
    theme: string
    author: string
    children: any
    setTheme: React.SetStateAction<string>
    setAuthor: React.SetStateAction<string>
}

const MyContext = createContext({})

const MyProvider = ({children}:ContextProps) => {
    const [theme, setTheme ] = useState<string>('Light')
    const [author, setAuthor] = useState<string>('')


    return (
        <MyContext.Provider value={{theme, setTheme, author, setAuthor}}>
            {children}
        </MyContext.Provider>
    )
}

export {MyContext, MyProvider}