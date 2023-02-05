import AuthFormFieldset from "./AuthFormFieldset";
import useFormWithValidation from "../utils/formValidator";

export default function Login({ onAuthoriz }) {
  const formValidator = useFormWithValidation();

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
          <AuthFormFieldset formValidator={formValidator} />
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
