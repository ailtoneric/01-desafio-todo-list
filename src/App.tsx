import styles from './App.module.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';

function App() {

  return (
    <div>
      <Header />
      <main className={styles.container}>
        <TaskForm />
        <section className={styles.tasks}>
            <div className={styles.taskHeader}>
                <span>Tarefas criadas <span className="task-count">5</span></span>
                <span>Concluídas <span className="completed-count">2 de 5</span></span>
            </div>
            <ul className="task-list">
                <li className="task">
                    <input type="checkbox" />
                    <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                    <button className="delete-task">🗑️</button>
                </li>
            </ul>
        </section>
      </main>
    </div>
  )
}

export default App