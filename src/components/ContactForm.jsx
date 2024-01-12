const ContactForm = ({ onClose }) => {
  return (
    <div>
      <div className="modal-header">
        <h2>Contact Me</h2>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <form>
        <div className="modal-content">
          <label>Name:</label>
          <input type="text" id="name" placeholder="Enter your name" />
          <label>Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />
          <label>Message:</label>
          <textarea id="message" placeholder="Type your message" />
          <div className="button-container">
            <button type="submit" className="send-button">
              Send
            </button>
            <button type="button" className="close-button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
