import { useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const addTask = () => {
    if (!input.trim()) return;

    setTasks((previous) => [
      ...previous,
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        text: input.trim(),
        completed: false
      }
    ]);

    setInput('');
  };

  const deleteTask = (id) => {
    setTasks((previous) =>
      previous.filter((task) => task.id !== id)
    );
  };

  const toggleTask = (id) => {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const completed = tasks.filter((task) => task.completed).length;

  return (
    <main className={`app ${darkMode ? 'dark' : 'light'}`}>
      <section className="container">
        <Header />

        <button
          type="button"
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀️ Modo claro' : '🌙 Modo oscuro'}
        </button>

        <div className="progress-card">
          <p>Mi progreso</p>
          <strong>{completed} de {tasks.length} tareas completadas</strong>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${tasks.length ? completed / tasks.length * 100 : 0}%`
              }}
            />
          </div>
        </div>

        <TaskForm
          input={input}
          setInput={setInput}
          onAddTask={addTask}
        />

        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onToggleTask={toggleTask}
        />

        <footer className="footer">
          Mi primera aplicación React · Deyanira Aguayo
        </footer>
      </section>
    </main>
  );
}

export default App;
