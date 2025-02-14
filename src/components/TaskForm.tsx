import styles from './TaskForm.module.css';	
import { PlusCircle } from '@phosphor-icons/react';

export default function TaskForm() {
    return (
        <div className={styles.taskForm}>
            <form>
                <input type="text" placeholder="Adicione uma nova tarefa" />
                <button>
                    Criar
                    <PlusCircle size={16} weight="bold" />
                </button>
            </form>
        </div>
    )
}