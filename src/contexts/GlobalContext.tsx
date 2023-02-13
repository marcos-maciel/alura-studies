import { createContext } from "react";
import { useState } from "react";
import { ITask } from "../models/task";

export const GlobalContext = createContext({})

export function InfoProvider({children}: {children:any}) {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [initTask, setInitTask] = useState({
        task: '',
        time: '00:00'
    });
    const [selected, setSelected] = useState<ITask>();


    return (
        <GlobalContext.Provider value={{
            tasks, setTasks,
            initTask, setInitTask,
            selected, setSelected
        }}>
            {children}
        </GlobalContext.Provider>

    )
}