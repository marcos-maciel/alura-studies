import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext({})

export function InfoProvider({children}: {children:any}) {
    const valor = "150";

    const [tasks, setTasks] = useState([]);

    const [initTask, setInitTask] = useState({
        task: '',
        time: '00:00'
    })

    return (
        <GlobalContext.Provider value={{
            valor,
            tasks, setTasks,
            initTask, setInitTask
        }}>
            {children}
        </GlobalContext.Provider>

    )
}