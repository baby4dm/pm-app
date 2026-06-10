import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  function handleClick() {
    dialog.current.close();
  }
  return createPortal(
    <dialog
      ref={dialog}
      className="p-5 rounded-lg"
      onClose={() => dialog.current.close()}
    >
      <div className="flex flex-col gap-2">
        {children}
        <button
          onClick={handleClick}
          className="bg-slate-950 text-white py-2 px-4 mx-auto rounded-lg mt-2 hover:bg-slate-600 hover:text-white hover:scale-105"
        >
          Okay
        </button>
      </div>
    </dialog>,
    document.getElementById("modal-root"),
  );
});
export default Modal;
