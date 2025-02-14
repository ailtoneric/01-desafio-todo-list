import styles from './TaskForm.module.css';	

export default function TaskForm() {
    return (
        <form className={styles.form}>
            <input type="text" />
            <button>Submit</button>
        </form>
    )
}