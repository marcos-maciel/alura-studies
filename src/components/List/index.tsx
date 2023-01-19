import Item from "./Item";
import style from './List.module.scss'
import { useContext } from 'react';
import { GlobalContext } from "../../contexts/GlobalContext";

function List() {
    const { tasks, setTasks }: any = useContext(GlobalContext);
    return (
        <aside className={style.listatasks}>
            <h2 onClick={() => {
                setTasks([...tasks, { task: "Estudar estado", time: "05:00:00" }])
            }}>Estudo do dia: </h2>
            <ul>
                {tasks.map((item, i) => (
                    <Item
                        key={i}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;