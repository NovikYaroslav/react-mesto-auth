import { useRef, useEffect} from "react";
import PopupWithForm from "./PopupWithForm";
import AvatarFormFieldset from "./AvatarFormFieldset";
import  useFormWithValidation  from "../utils/formValidator"

function EditAvatarProfile({ isOpen, onClose, onUpdateAvatar, message }) {
  const avatarRef = useRef();
  const formValidator = useFormWithValidation()

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  useEffect(() => {
    formValidator.resetForm()
  }, [isOpen]);


  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={message}
      isValid={formValidator.isValid}
    >
      <AvatarFormFieldset avatarRef={avatarRef} formValidator={formValidator}/>
    </PopupWithForm>
  );
}

export default EditAvatarProfile;
