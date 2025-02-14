import styles from './TaskHeader.module.css';

export default function TaskHeader() {
    return (
        <header className={styles.taskHeader}>
            <aside className={styles.tasks}>
                <p>Tarefas criadas <span>5</span></p>
            </aside>
            <aside className={styles.completedTasks}>
                <p>Concluídas <span>2 de 5</span></p>
            </aside>
        </header>
    )
}