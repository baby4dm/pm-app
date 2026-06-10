import { forwardRef } from "react";

const Input = forwardRef(function Input({ title, textarea, type }, ref) {
  const inputSyles =
    "bg-zinc-200 border-b-2 rounded-lg  p-3 focus:outline-none focus:border-zinc-800";
  return (
    <p className="flex flex-col">
      <label className="text-sm font-mono text-zinc-600">{title}</label>
      {textarea ? (
        <textarea ref={ref} className={inputSyles + " h-24"} />
      ) : (
        <input ref={ref} className={inputSyles + " h-10"} type={type} />
      )}
    </p>
  );
});
export default Input;
