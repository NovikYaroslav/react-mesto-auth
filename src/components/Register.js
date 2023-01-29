export default function Register() {


    // переименовать fieldset


    
    return (
        <div className="register">
        <div className="register__container">
          <h2 className="register__title">Регистрация</h2>
          
          <form
            className="register__form"
            name="email"
            // onSubmit={onSubmit}
            noValidate
          >
    <fieldset className="popup-fieldset">
      <input
        className="popup-fieldset__input register-fieldset__input_value_name"
        required
        minLength="2"
        maxLength="40"
        type="text"
        name="userName"
        placeholder="Email"
        // value={formValidator.values["userName"] || ""}
        // onChange={formValidator.handleChange}
      />
      <span className="popup__error"></span>
      <input
        className="popup-fieldset__input register-fieldset__input_value_about"
        required
        minLength="2"
        maxLength="200"
        type="text"
        name="about"
        placeholder="Пароль"
        // value={formValidator.values["about"] || ""}
        // onChange={formValidator.handleChange}
      />
      <span className="popup__error"></span>
    </fieldset>
            <button
            className="register__save"
            //   className={`popup__save ${!isValid ? "popup__save_inactive" : ""}`}
              type="submit"
            //   disabled={!isValid}
            >
              {/* {buttonText} */}
              Зарегистрироваться
            </button>
          </form>
          <p className="register__question">Уже зарегистрированы?<button className="register__login-button">Войти</button></p>
        </div>
      </div>


    )
}