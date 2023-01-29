import PopupWithForm from "./PopupWithForm";

function ConfirmationPopup({ card, isOpen, onClose, onConfirmation }) {
  function handleSubmit(e) {
    onConfirmation(card);
    e.preventDefault();
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="confirmation"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Да"
      isValid={true}
    />
  );
}

export default ConfirmationPopup;
