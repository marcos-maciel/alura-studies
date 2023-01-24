import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext({})

export function InfoProvider({children}: {children:any}) {
    const valor = "150";

    const [tasks, setTasks] = useState([{
        task: "React",
        time: "02:00:00"
    },
    {
        task: "JavaScript",
        time: "01:00:00"
    },
    {
        task: "TypeScript",
        time: "03:00:00"
    }]);

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