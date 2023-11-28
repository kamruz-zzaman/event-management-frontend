import Modal from "react-responsive-modal";

const CreateEventModal = ({ open, setOpen }) => {
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
    </div>
  );
};

export default CreateEventModal;
