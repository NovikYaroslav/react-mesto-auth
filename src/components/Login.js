import useFormWithValidation from "../utils/formValidator";
import { useNavigate } from "react-router-dom";

export default function Login({ onAuthoriz }) {
  const formValidator = useFormWithValidation();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    onAuthoriz(formValidator.values["Email"], formValidator.values["Password"]);

    formValidator.resetForm();
  }

  return (
    <div className="entry">
      <div className="entry__container">
        <h2 className="entry__title">Вход</h2>

        <form className="forms" name="email" onSubmit={handleSubmit} noValidate>
          <fieldset className="forms-fieldset">
            <input
              className="forms-fieldset__input forms-fieldset__input_white register-fieldset__input_value_name"
              required
              minLength="2"
              maxLength="50"
              type="email"
              name="Email"
              placeholder="Email"
              value={formValidator.values["Email"] || ""}
              onChange={formValidator.handleChange}
            />
            <span className="forms-fieldset__error">
              {formValidator.errors["Email"]}
            </span>
            <input
              className="forms-fieldset__input forms-fieldset__input_white register-fieldset__input_value_about"
              required
              minLength="4"
              maxLength="200"
              type="text"
              name="Password"
              placeholder="Пароль"
              value={formValidator.values["Password"] || ""}
              onChange={formValidator.handleChange}
            />
            <span className="forms-fieldset__error">
              {formValidator.errors["Password"]}
            </span>
          </fieldset>
          <button
            className="forms__save_entry"
            type="submit"
            disabled={!formValidator.isValid}
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}
