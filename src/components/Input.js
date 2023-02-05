function Input(props) {
// Код работает
return (
    <>
    <input
        className="forms-fieldset__input forms-fieldset__input_white register-fieldset__input_value_name"
        required
        minLength={props.minLength}
        maxLength={props.maxLength}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.formValidator.values[props.name] || ""}
        onChange={props.formValidator.handleChange}
      />
      <span className="forms-fieldset__error">
        {props.formValidator.errors[props.name]}
      </span>
    </>
)
}

// function Input({minLength, maxLength, type, name, placeholder, formValidator}) {
//     // Код НЕ работает
//     return (
//         <>
//         <input
//             className="forms-fieldset__input forms-fieldset__input_white register-fieldset__input_value_name"
//             required
//             minLength={minLength}
//             maxLength={maxLength}
//             type={type}
//             name={name}
//             placeholder={placeholder}
//             value={{formValidator}.values[{name}] || ""}
//             onChange={{formValidator}.handleChange}
//           />
//           <span className="forms-fieldset__error">
//             {{formValidator}.errors[{name}]}
//           </span>
//         </>
//     )
//     }


// function Input({minLength, maxLength, type, name, placeholder, formValidator}) {
//     // Код НЕ работает, но ошибок не выдает 
//     return (
//         <>
//         <input
//             className="forms-fieldset__input forms-fieldset__input_white register-fieldset__input_value_name"
//             required
//             minLength={minLength}
//             maxLength={maxLength}
//             type={type}
//             name={name}
//             placeholder={placeholder}
//             value={formValidator.values[{name}] || ""}
//             onChange={formValidator.handleChange}
//           />
//           <span className="forms-fieldset__error">
//             {formValidator.errors[{name}]}
//           </span>
//         </>
//     )
//     }


export default Input

// {minLength, maxLength, type, name, placeholder, formValidator}

// <Input minLength={"2"} maxLength={"50"} type={"email"} name={"Email"} placeholder={"Email"}/> RegEmail
// <Input minLength={"2"} maxLength={"200"} type={"password"} name={"Password"} placeholder={"Пароль"}/> RegPassword

// <Input minLength={} maxLength={} type={"url"} name={"avatarLink"} placeholder={"Ссылка на аватар"}/> Avatar

// <Input minLength={2} maxLength={30} type={"text"} name={"name"} placeholder={"Название"}/> CardName
// <Input minLength={} maxLength={} type={"url"} name={"link"} placeholder={"Ссылка на картинку"}/> CardLink

// <Input minLength={2} maxLength={40} type={"text"} name={"userName"} placeholder={"Как Вас зовут?"}/> CardName
// <Input minLength={2} maxLength={200} type={"text"} name={"about"} placeholder={"Кратко о себе"}/> CardName

// console.log(formValidator)