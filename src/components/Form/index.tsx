import React from 'react';
import Button from '../Button';
import style from './Form.module.scss'

class Form extends React.Component {
    state = {
        task: '',
        time: '00:00'
    }

    createTask(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.createTask.bind(this)}>
                <div className={style.inputContainer}>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='task'>
                        Adiciona um novo estudo
                    </label>
                    <input
                        type="text"
                        name='task'
                        value={this.state.task}
                        onChange={evento => this.setState({ ...this.state, task: evento.target.value })}
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
                        value={this.state.time}
                        onChange={evento => this.setState({ ...this.state, time: evento.target.value })}
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
}

export default Form;