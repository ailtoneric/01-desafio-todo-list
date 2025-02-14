import styles from './Task.module.css';
import { Trash } from '@phosphor-icons/react';
import { ITask } from '../App';

export default function Task({id, name, isCompleted}: ITask) {
    return (
        <div key={id} className={styles.task}>
            <div>
                <input type="checkbox"  />
                <span>{name}</span>
            </div>
            <button>
                <Trash size={24} />
            </button>
        </div>
    )
}