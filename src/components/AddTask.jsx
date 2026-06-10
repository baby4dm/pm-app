import { useRef } from "react";
import Modal from "./Modal";
import Input from "./Input";

export default function AddTask({ onAddTask }) {
  const taskInput = useRef();
  const modal = useRef();

  function handleAddTask() {
    if (taskInput.current.value.trim().length < 1) {
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

      <div className="flex gap-4 py-4 border-b-2">
        <Input ref={taskInput} type="text" />
        <button
          onClick={handleAddTask}
          className="bg-slate-950 py-2 px-4 rounded-lg text-white hover:bg-slate-600 hover:text-white hover:scale-105"
        >
          Add Task
        </button>
      </div>
    </>
  );
}
