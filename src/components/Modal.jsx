import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ open, children }) => {
  const dialog = useRef();

  useEffect(() => {
    open ? dialog.current.showModal() : dialog.current.close();
  }, [open]);

  return createPortal(
    <dialog className="contact-modal" ref={dialog}>
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
};
export default Modal;
