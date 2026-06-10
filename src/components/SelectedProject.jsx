import Input from "./Input";
import Task from "./Task";
import Modal from "./Modal";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

export default function SelectProject({
  project,
  onDelete,
  onAddTask,
  onRemoveTask,
}) {
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
            onClick={onDelete}
            className="bg-slate-950 py-2 px-4 rounded-lg text-white hover:bg-slate-600 hover:text-white hover:scale-105"
          >
            Delete
          </button>
        </div>
      </div>
      <div>
        <p className="text-lg whitespace-pre-wrap">{project.description}</p>
      </div>
      <div className="border-t-2 py-4 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">TASKS</h2>
        <AddTask onAddTask={onAddTask} />
      </div>
      <TaskList project={project} onRemoveTask={onRemoveTask} />
    </section>
  );
}
