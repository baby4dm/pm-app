export default function SelectProject({ project }) {
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
          <button className="bg-slate-950 py-2 px-4 rounded-lg text-white hover:bg-slate-600 hover:text-white hover:scale-105">
            Delete
          </button>
        </div>
      </div>
      <div>
        <p>{project.description}</p>
      </div>
      <div>
        <h2>TASKS</h2>
      </div>
    </section>
  );
}
