function TaskItem({ task, onDeleteTask, onToggleTask }) {
  return (
    <li className={`task-item ${task.completed ? 'is-complete' : ''}`}>
      <label className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />

        <span>{task.text}</span>
      </label>

      <button
        type="button"
        className="delete-button"
        onClick={() => onDeleteTask(task.id)}
        aria-label={`Eliminar ${task.text}`}
      >
        Eliminar
      </button>
    </li>
  );
}

export default TaskItem;
