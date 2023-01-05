import Item from "./Item";
import style from './List.module.scss'

function List() {
    const tasks = [
        {
            tarefa: "React",
            tempo: "02:00:00"
        },
        {
            tarefa: "JavaScript",
            tempo: "01:00:00"
        },
        {
            tarefa: "TypeScript",
            tempo: "03:00:00"
        },
    ]
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
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