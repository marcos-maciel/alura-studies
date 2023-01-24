import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import Button from '../Button';
import style from './Form.module.scss'

function Form() {
    const { setTasks }: any = useContext(GlobalContext);
    const { initTask, setInitTask }: any = useContext(GlobalContext);

    function createTask(evento: React.FormEvent<HTMLFormElement>) {
        console.log(initTask);
        evento.preventDefault();
        setTasks(tasks => [...tasks, { ...initTask }])
    }

    return (
        <form className={style.novaTarefa} onSubmit={(createTask)}>
            <div className={style.inputContainer}>
            </div>
            <div className={style.inputContainer}>
                <label htmlFor='task'>
                    Adiciona um novo estudo
                </label>
                <input
                    type="text"
                    name='task'
                    value={initTask.task}
                    onChange={evento => setInitTask({ ...initTask, task: evento.target.value })}
                    id='task'
                    placeholder='O que vc quer estudar'
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor='time'>
                    Tempo
                </label>
                <input
                    type="time"
                    step='1'
                    name='time'
                    value={initTask.time}
                    onChange={evento => setInitTask({ ...initTask, time: evento.target.value })}
                    id='time'
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Button type='submit'>
                Adicionar
            </Button>
        </form>
    )
}

export default Form;