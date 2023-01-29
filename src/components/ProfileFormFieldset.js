function ProfileFormFieldset({ formValidator }) {
  return (
    <fieldset className="popup-fieldset">
      <input
        className="popup-fieldset__input popup-fieldset__input_value_name"
        required
        minLength="2"
        maxLength="40"
        type="text"
        name="userName"
        placeholder="Как Вас зовут?"
        value={formValidator.values["userName"] || ""}
        onChange={formValidator.handleChange}
      />
      <span className="popup__error">{formValidator.errors["userName"]}</span>
      <input
        className="popup-fieldset__input popup-fieldset__input_value_about"
        required
        minLength="2"
        maxLength="200"
        type="text"
        name="about"
        placeholder="Кратко о себе"
        value={formValidator.values["about"] || ""}
        onChange={formValidator.handleChange}
      />
      <span className="popup__error">{formValidator.errors["about"]}</span>
    </fieldset>
  );
}

export default ProfileFormFieldset;
