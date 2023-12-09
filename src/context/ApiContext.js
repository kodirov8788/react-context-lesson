import { createContext, useState } from "react";

export const ApiContext = createContext()


export const ApiContextProvider = ({ children }) => {
    const [switcher, setSwitcher] = useState(false)

    return <ApiContext.Provider value={{ switcher, setSwitcher }}>{children}</ApiContext.Provider>
}