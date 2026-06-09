import project from "../assets/no-projects.png";

export default function NoProjectSelected({ onAddProject }) {
  return (
    <section className="flex flex-col items-center gap-6 w-full p-12 max-w-[60rem] mx-auto">
      <img src={project} alt="Project" className="max-w-32" />
      <h2 className="font-mono font-extrabold text-4xl text-stone-950">
        No Project Selected
      </h2>
      <p className="font-sans text-lg text-stone-600">
        Select a project or get started with new one
      </p>
      <p>
        <button
          onClick={onAddProject}
          className="bg-slate-950 rounded-lg text-white px-4 py-2.5 font-mono hover:bg-slate-600 hover:text-white hover:scale-105"
        >
          Create new Project
        </button>
      </p>
    </section>
  );
}
