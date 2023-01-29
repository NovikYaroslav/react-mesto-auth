import { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import CardFormFieldset from "./CardFormFieldset";
import useFormWithValidation from "../utils/formValidator";

function AddPlacePopup({ isOpen, onClose, onAddPlace, message }) {
  const formValidator = useFormWithValidation();

  useEffect(() => {
    formValidator.resetForm();
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: formValidator.values["name"],
      link: formValidator.values["link"],
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={message}
      isValid={formValidator.isValid}
    >
      <CardFormFieldset formValidator={formValidator} />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
