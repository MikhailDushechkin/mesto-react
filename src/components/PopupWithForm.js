import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup ${props.name}-popup ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <form className={`form ${props.name}-form`} name={props.name} noValidate>
          <h2 className="form__title">{props.title}</h2>
          {props.children}
          <button type="submit" className="form__save-button">
            {props.buttonText}
          </button>
        </form>
        <button
          type="button"
          className={`popup__close-button ${props.name}-popup__close-button`}
          aria-label="Закрыть поп-ап"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
