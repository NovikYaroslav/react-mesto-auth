import { useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import ProfileFormFieldset from "./ProfileFormFieldset";
import useFormWithValidation from "../utils/formValidator";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, message }) {
  const currentUser = useContext(CurrentUserContext);
  const formValidator = useFormWithValidation();

  useEffect(() => {
    formValidator.resetForm(
      { userName: currentUser.name, about: currentUser.about },
      {},
      true
    );
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: formValidator.values.userName,
      about: formValidator.values.about,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      buttonText={message}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={formValidator.isValid}
    >
      <ProfileFormFieldset formValidator={formValidator} />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
