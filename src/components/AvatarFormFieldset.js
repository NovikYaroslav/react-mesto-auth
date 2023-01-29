function AvatarFormFieldset({ avatarRef, formValidator }) {
  return (
    <fieldset className="popup-fieldset">
      <input
        className="popup-fieldset__input popup-fieldset__input_value_avatar"
        required
        type="url"
        name="avatarLink"
        placeholder="Ссылка на аватар"
        value={formValidator.values["avatarLink"] || ""}
        onChange={formValidator.handleChange}
        ref={avatarRef}
      />
      <span className="popup__error">{formValidator.errors["avatarLink"]}</span>
    </fieldset>
  );
}

export default AvatarFormFieldset;
