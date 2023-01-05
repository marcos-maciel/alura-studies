import Button from "../Button";
import Clock from "./Clock";
import style from './Cronom.module.scss'

export default function Cronom() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock></Clock>
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}