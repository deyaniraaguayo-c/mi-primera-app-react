function TaskForm({ input, setInput, onAddTask }) {
  function handleSubmit(event) {
    event.preventDefault();
    onAddTask();
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label className="label" htmlFor="task">
        Agregar una actividad
      </label>

      <div className="input-group">
        <input
          id="task"
          type="text"
          placeholder="¿Qué tienes pendiente hoy?"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          maxLength={100}
          required
        />

        <button type="submit">
          + Agregar
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
