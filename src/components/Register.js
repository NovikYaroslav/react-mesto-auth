import { Link } from "react-router-dom";
import AuthFormFieldset from "./AuthFormFieldset"
import useFormWithValidation from "../utils/formValidator";

export default function Register({ onRegister }) {
  const formValidator = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(formValidator.values["Email"], formValidator.values["Password"]);
    formValidator.resetForm();
  }

  return (
    <div className="entry">
      <div className="entry__container">
        <h2 className="entry__title">Регистрация</h2>
        <form className="forms" name="email" onSubmit={handleSubmit} noValidate>
        <AuthFormFieldset formValidator={formValidator}/>
          <button
            className="forms__save_entry"
            type="submit"
            disabled={!formValidator.isValid}
          >
            Зарегистрироваться
          </button>
        </form>
        <p className="entry__question">
          Уже зарегистрированы?
          <Link to="/sign-in" className="entry__login-button">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}
