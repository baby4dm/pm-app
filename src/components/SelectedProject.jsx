import { useRef } from "react";
import Input from "./Input";
import Task from "./Task";
import Modal from "./Modal";

export default function SelectProject({
  project,
  onDelete,
  onAddTask,
  onRemoveTask,
}) {
  const taskInput = useRef();
  const modal = useRef();
  function handleDelete() {
    onDelete();
  }

  function handleAddTask() {
    if (taskInput.current.value.trim() < 1) {
      modal.current.open();
      return;
    }
    const newTask = {
      id: Math.random().toString(36).substring(2, 10),
      title: taskInput.current.value,
    };
    taskInput.current.value = "";
    onAddTask(newTask);
  }
  return (
    <>
      <Modal ref={modal}>
        <h2>Invalid input</h2>
        <p>Please check that your input correct</p>
      </Modal>
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
          <p className="text-lg">{project.description}</p>
        </div>
        <div className="border-t-2 py-4 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">TASKS</h2>
          <div className="flex gap-4 py-4 border-b-2">
            <Input ref={taskInput} type="text" />
            <button
              onClick={handleAddTask}
              className="bg-slate-950 py-2 px-4 rounded-lg text-white hover:bg-slate-600 hover:text-white hover:scale-105"
            >
              Add Task
            </button>
          </div>
          <ul className="flex flex-col gap-4">
            {project.tasks &&
              project.tasks.map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  onRemove={onRemoveTask}
                />
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}
