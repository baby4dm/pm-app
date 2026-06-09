import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onSave }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;
    if (!validateInput(enteredTitle, enteredDescription, enteredDate)) {
      modal.current.open();
      return;
    }
    onSave({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });

    clearInputs();
  }

  function validateInput(enteredTitle, enteredDescription, enteredDate) {
    return (
      enteredTitle.trim().length > 0 &&
      enteredDescription.trim().length > 0 &&
      enteredDate.trim().length > 0
    );
  }

  function clearInputs() {
    title.current.value = "";
    description.current.value = "";
    date.current.value = "";
  }

  return (
    <>
      <Modal ref={modal}>
        <h2>Invalid input</h2>
        <p>Please check that your input correct</p>
      </Modal>
      <div className="flex flex-col gap-6 w-full p-12 max-w-[60rem] mx-auto">
        <menu className="flex gap-3 self-end">
          <button className="bg-zinc-200 py-2 px-4 rounded-lg hover:bg-slate-800 hover:text-white hover:scale-105">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-slate-950 py-2 px-4 rounded-lg text-white hover:bg-slate-600 hover:text-white hover:scale-105"
          >
            Save
          </button>
        </menu>
        <div className="flex flex-col gap-3">
          <Input ref={title} title="TITLE" type="text" />
          <Input
            ref={description}
            title="DESCRIPTION"
            type="text"
            textarea={true}
          />
          <Input ref={date} title="DUE DATE" type="date" />
        </div>
      </div>
    </>
  );
}
