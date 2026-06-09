export default function Sidebar() {
  return (
    <aside className="bg-slate-950 text-white w-1/3 rounded-tr-2xl p-8 pt-120 flex flex-col items-start gap-5 ">
      <h1 className="font-mono font-bold text-xl">YOUR PROJECTS</h1>
      <button className="bg-zinc-700 text-gray-300 font-bold text-sm py-2 px-4 rounded-lg hover:bg-zinc-500 hover:scale-105">
        + Add Project
      </button>
      <ul></ul>
    </aside>
  );
}
