import React from "react";

function Main() {
  function handleEditAvatarClick() {
    document.querySelector(".avatar-popup").classList.add("popup_opened");
  }
  function handleEditProfileClick() {
    document.querySelector(".profile-popup").classList.add("popup_opened");
  }
  function handleAddPlaceClick() {
    document.querySelector(".cards-popup").classList.add("popup_opened");
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div
            className="profile__avatar-wrapper"
            onClick={handleEditAvatarClick}
          >
            <img src="#" alt="Аватар профиля" className="profile__avatar" />
          </div>
          <div className="profile__bio">
            <div className="profile__info">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <p className="profile__description">Исследователь океана</p>
            </div>
            <button
              onClick={handleEditProfileClick}
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль"
            ></button>
          </div>
        </div>
        <button
          onClick={handleAddPlaceClick}
          className="profile__add-button"
          type="button"
          aria-label="Добавить фотографии"
        ></button>
      </section>
      <section className="photo-cards">
        <ul className="photo-cards__list"></ul>
      </section>
    </main>
  );
}

export default Main;
