import { useRef } from "react";

export default function SelectProject({ project, onDelete, onAddTask }) {
  const taskInput = useRef();
  function handleDelete() {
    onDelete();
  }

  function handleAddTask() {
    const newTask = {
      id: Math.random.toString(36).substring(2, 10),
      title: taskInput.current.value,
    };
    onAddTask(newTask);
  }
  return (
    <section
      id={project.id}
      className="flex flex-col gap-6 w-full p-12 max-w-[60rem] mx-auto"
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-mono font-bold text-5xl">{project.title}</h1>
          <p>{project.date}</p>
        </div>
        <div>
          <button
            onClick={handleDelete}
            className="bg-slate-950 py-2 px-4 rounded-lg text-white hover:bg-slate-600 hover:text-white hover:scale-105"
          >
            Delete
          </button>
        </div>
      </div>
      <div>
        <p>{project.description}</p>
      </div>
      <div className="border-t-2 py-4">
        <h2>TASKS</h2>
        <div>
          <input ref={taskInput} type="text" />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        <ul>
          {project.tasks.map((task) => (
            <li key={task.id} id={task.id}>
              {task.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
