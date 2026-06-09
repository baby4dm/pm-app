export default function Input({ title, textarea, type }) {
  return (
    <p className="flex flex-col">
      <label className="text-sm font-mono text-zinc-600">{title}</label>
      {textarea ? (
        <textarea className="bg-zinc-200 rounded-lg h-24" />
      ) : (
        <input className="bg-zinc-200 rounded-lg h-10 p-3" type={type} />
      )}
    </p>
  );
}
