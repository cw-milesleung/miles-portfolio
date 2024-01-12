import ContactForm from "./ContactForm.jsx";
import { useState } from "react";
import Modal from "./Modal.jsx";

const Info = () => {
  const [open, isOpen] = useState(false);

  return (
    <>
      <Modal open={open}>
        {open && <ContactForm onClose={() => isOpen(false)} />}
      </Modal>
      <section className="cta">
        <a download>
          <button className="btn download-btn">Download Resume</button>
        </a>
        <a>
          <button className="btn contact-btn" onClick={() => isOpen(true)}>
            Contact Me
          </button>
        </a>
      </section>
    </>
  );
};
export default Info;
