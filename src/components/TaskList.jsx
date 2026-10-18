import TaskItem from './TaskItem';

function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  return (
    <section className="task-list-section">
      <h2>Mis actividades</h2>

      {tasks.length === 0 ? (
        <div className="empty-message">
          <span className="empty-icon">✿</span>
          <p>Todavía no tienes tareas.</p>
          <small>¡Agrega una actividad para comenzar!</small>
        </div>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask}
              onToggleTask={onToggleTask}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default TaskList;
