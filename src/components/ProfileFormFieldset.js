function ProfileFormFieldset({ formValidator }) {
  return (
    <fieldset className="forms-fieldset">
      <input
        className="forms-fieldset__input forms-fieldset__input_value_name"
        required
        minLength="2"
        maxLength="40"
        type="text"
        name="userName"
        placeholder="Как Вас зовут?"
        value={formValidator.values["userName"] || ""}
        onChange={formValidator.handleChange}
      />
      <span className="forms-fieldset__error">{formValidator.errors["userName"]}</span>
      <input
        className="forms-fieldset__input forms-fieldset__input_value_about"
        required
        minLength="2"
        maxLength="200"
        type="text"
        name="about"
        placeholder="Кратко о себе"
        value={formValidator.values["about"] || ""}
        onChange={formValidator.handleChange}
      />
      <span className="forms-fieldset__error">{formValidator.errors["about"]}</span>
    </fieldset>
  );
}

export default ProfileFormFieldset;
