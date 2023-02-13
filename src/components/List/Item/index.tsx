import { GlobalContext } from '../../../contexts/GlobalContext';
import { ITask } from '../../../models/task'
import { useContext } from 'react';
import style from '../List.module.scss'

export default function Item({ task, time, selected, completed, id }: ITask) {
    const { tasks, setTasks }: any = useContext(GlobalContext);
    const { selectedGlobal, setSelected }: any = useContext(GlobalContext);
    
    function selectTask(taskSelected: ITask) {
        setSelected(taskSelected);
        setTasks((tasksPrevs: ITask[]) => tasksPrevs.map((task: ITask) => ({
            ...task,
            selected: task.id == taskSelected.id ? true : false
        })))
    }

    return (
        <li
            onClick={() => selectTask({
                task, 
                time, 
                selected, 
                completed, 
                id
            })}
            className={`${style.item} ${selected ? style.itemSelecionado : ''}`}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}