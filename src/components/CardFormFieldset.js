function CardFormFieldset({ formValidator }) {
  return (
    <fieldset className="forms-fieldset">
      <input
        className="forms-fieldset__input forms-fieldset__input_value_card-title"
        required
        minLength="2"
        maxLength="30"
        type="text"
        name="name"
        placeholder="Название"
        value={formValidator.values["name"] || ""}
        onChange={formValidator.handleChange}
      />
      <span className="forms-fieldset__error" id="name-error">
        {formValidator.errors["name"]}
      </span>
      <input
        className="forms-fieldset__input forms-fieldset__input_value_card-photo"
        required
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        value={formValidator.values["link"] || ""}
        onChange={formValidator.handleChange}
      />
      <span className="forms-fieldset__error">{formValidator.errors["link"]}</span>
    </fieldset>
  );
}

export default CardFormFieldset;
