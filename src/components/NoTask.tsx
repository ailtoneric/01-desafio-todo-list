import clipboard from '../assets/clipboard.svg';
import styles from './NoTask.module.css';

export default function NoTask() {
    return (
        <div className={styles.container}>
            <img src={clipboard} alt="clipboard" />
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}