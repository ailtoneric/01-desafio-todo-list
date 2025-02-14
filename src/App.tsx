import styles from './App.module.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';

function App() {

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <TaskForm />
      </div>
    </div>
  )
}

export default App