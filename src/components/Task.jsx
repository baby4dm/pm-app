export default function Task({ id, title, onRemove }) {
  return (
    <li
      className="flex gap-4 justify-between items-center bg-slate-200 p-3 rounded-xl"
      id={id}
    >
      <p className="font-sans text-lg">{title}</p>
      <button
        onClick={() => onRemove(id)}
        className="bg-slate-950 py-2 px-4 rounded-lg text-white hover:bg-slate-600 hover:text-white hover:scale-105"
      >
        Remove
      </button>
    </li>
  );
}
