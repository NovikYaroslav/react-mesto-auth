function AvatarFormFieldset({ avatarRef, formValidator }) {
  return (
    <fieldset className="forms-fieldset">
      <input
        className="forms-fieldset__input forms-fieldset__input_value_avatar"
        required
        type="url"
        name="avatarLink"
        placeholder="Ссылка на аватар"
        value={formValidator.values["avatarLink"] || ""}
        onChange={formValidator.handleChange}
        ref={avatarRef}
      />
      <span className="forms-fieldset__error">{formValidator.errors["avatarLink"]}</span>
    </fieldset>
  );
}

export default AvatarFormFieldset;
