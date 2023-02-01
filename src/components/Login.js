export default function Login() {
    return (
        <div className="entry">
        <div className="entry__container">
          <h2 className="entry__title">Вход</h2>
          
          <form
            className="forms"
            name="email"
            // onSubmit={onSubmit}
            noValidate
          >
    <fieldset className="forms-fieldset">
      <input
        className="forms-fieldset__input forms-fieldset__input_white register-fieldset__input_value_name"
        required
        minLength="2"
        maxLength="40"
        type="text"
        name="Email"
        placeholder="Email"
        // value={formValidator.values["userName"] || ""}
        // onChange={formValidator.handleChange}
      />
      <span className="forms-fieldset__error"></span>
      <input
        className="forms-fieldset__input forms-fieldset__input_white register-fieldset__input_value_about"
        required
        minLength="2"
        maxLength="200"
        type="text"
        name="Password"
        placeholder="Пароль"
        // value={formValidator.values["about"] || ""}
        // onChange={formValidator.handleChange}
      />
      <span className="forms-fieldset__error"></span>
    </fieldset>
            <button
            className="forms__save forms__save_entry"
            //   className={`popup__save ${!isValid ? "popup__save_inactive" : ""}`}
              type="submit"
            //   disabled={!isValid}
            >
              {/* {buttonText} */}
              Войти
            </button>
          </form>
        </div>
      </div>


    )
}