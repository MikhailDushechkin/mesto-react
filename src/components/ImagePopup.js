import React from "react";

function ImagePopup() {
  return (
    <div className="popup overlay-photo">
      <div className="overlay-photo__container">
        <img src="#" alt="" className="overlay-photo__image" />
        <h2 className="overlay-photo__description"></h2>
        <button
          type="button"
          className="popup__close-button overlay-photo__close-button"
          aria-label="Закрыть поп-ап"
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
