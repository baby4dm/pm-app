export default function Sidebar({
  onAddProject,
  projects,
  onSelect,
  selectedProjectId,
}) {
  function handleSelect(event) {
    onSelect(event.target.id);
  }
  return (
    <aside className="bg-stone-950 text-white w-1/3 rounded-r-2xl p-8 pt-120 flex flex-col items-start gap-5 max-w-[22rem]">
      <h2 className="font-mono font-bold text-xl">YOUR PROJECTS</h2>
      <button
        onClick={onAddProject}
        className="bg-zinc-700 text-gray-300 font-bold text-sm py-2 px-4 rounded-lg hover:bg-zinc-500 hover:scale-105"
      >
        + Add Project
      </button>
      <ul className="text-white w-full flex flex-col gap-2 mt-4">
        {projects.map((prj) => {
          const isSelected = prj.id === selectedProjectId;
          return (
            <li
              onClick={handleSelect}
              className={`w-full text-white rounded-lg px-4 py-2 hover:bg-zinc-700 cursor-pointer ${isSelected ? "bg-zinc-700" : ""}`}
              key={prj.id}
              id={prj.id}
            >
              {prj.title}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
