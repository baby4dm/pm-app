import Input from "./Input";

export default function NewProject() {
  return (
    <div className="flex flex-col gap-6 w-full p-12">
      <menu className="flex gap-3 self-end">
        <button className="bg-zinc-400 py-2 px-4 rounded-lg">Cancel</button>
        <button className="bg-slate-950 py-2 px-4 rounded-lg text-white">
          Save
        </button>
      </menu>
      <div className="flex flex-col gap-3">
        <Input title="TITLE" type="text" />
        <Input title="DESCRIPTION" type="text" textarea={true} />
        <Input title="DUE DATE" type="date" />
      </div>
    </div>
  );
}
