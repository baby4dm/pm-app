import { forwardRef } from "react";

const Input = forwardRef(function Input({ title, textarea, type }, ref) {
  return (
    <p className="flex flex-col">
      <label className="text-sm font-mono text-zinc-600">{title}</label>
      {textarea ? (
        <textarea
          ref={ref}
          className="bg-zinc-200 border-b-2 rounded-lg h-24 p-3 focus:outline-none focus:border-zinc-800"
        />
      ) : (
        <input
          ref={ref}
          className="bg-zinc-200 border-b-2 rounded-lg h-10 p-3 focus:outline-none focus:border-zinc-800"
          type={type}
        />
      )}
    </p>
  );
});
export default Input;
