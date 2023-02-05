// Решил пока унифицировать только фильдсет, по аналогии с текущими филдсетами попапов.
// Комментарий по обертке Popup понял. Сделаю рефакторинг Popup/Form/Inputs позже.
import Input from "./Input";
function AuthFormFieldset({ formValidator }) {

  // console.log(formValidator)

  return (
    <fieldset className="forms-fieldset">
      <Input
        minLength={"2"}
        maxLength={"50"}
        type={"email"}
        name={"Email"}
        placeholder={"Email"}
        formValidator={formValidator}
      />
      <Input
        minLength={"2"}
        maxLength={"200"}
        type={"password"}
        name={"Password"}
        placeholder={"Пароль"}
        formValidator={formValidator}
      />
      {/* <input
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
        type="password"
        name="Password"
        placeholder="Пароль"
        value={formValidator.values["Password"] || ""}
        onChange={formValidator.handleChange}
      />
      <span className="forms-fieldset__error">
        {formValidator.errors["Password"]}
      </span> */}
    </fieldset>
  );
}

export default AuthFormFieldset;
