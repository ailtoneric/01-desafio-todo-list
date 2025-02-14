import { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskHeader from './components/TaskHeader';
import NoTask from './components/NoTask';
import Task from './components/Task';

export interface ITask {
  id: number;
  name: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, name: 'Ailton', isCompleted: false},
    {id: 1, name: 'Ailton', isCompleted: true},
  ] as ITask[]);

  return (
    <div>
      <Header />
      <main className={styles.container}>
        <TaskForm />
        <section className={styles.tasks}>
            <TaskHeader />
            { 
              tasks.length === 0 ? <NoTask /> : 
              (
                <div className={styles.taskList}>
                  {tasks.map(
                    (task) => (
                      <Task 
                        key={task.id}
                        id={task.id}
                        name={task.name}
                        isCompleted={task.isCompleted}
                      />
                    )
                  )}
                </div>
              )
            }
        </section>
      </main>
    </div>
  )
}

export default App