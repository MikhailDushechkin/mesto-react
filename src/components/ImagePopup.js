import React from "react";

function ImagePopup(props) {
  return (
    <div className={`popup overlay-photo ${props.card && 'popup_opened'}`}>
      <div className="overlay-photo__container">
        <img src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''} className="overlay-photo__image" />
        <h2 className="overlay-photo__description">{props.card.name}</h2>
        <button
          type="button"
          className="popup__close-button overlay-photo__close-button"
          aria-label="Закрыть поп-ап"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
