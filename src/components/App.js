import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState('');
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState('');
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState('');
  const [selectedCard, setSelectedCard] = React.useState('');

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        children={
          <>
            <fieldset className="form__fieldset">
              <label className="form__field">
                <input
                  type="url"
                  id="avatar-link"
                  className="form__input"
                  placeholder="Ссылка на аватар"
                  name="link"
                  required
                />
                <span className="form__input-error avatar-link-error"></span>
              </label>
            </fieldset>
          </>
        }
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        children={
          <>
            <fieldset className="form__fieldset">
              <label className="form__field">
                <input
                  type="text"
                  id="profile-name"
                  className="form__input"
                  placeholder="Имя"
                  name="name"
                  minLength="2"
                  maxLength="40"
                  required
                />
                <span className="form__input-error profile-name-error"></span>
              </label>
              <label className="form__field">
                <input
                  type="text"
                  id="profile-description"
                  className="form__input"
                  placeholder="О себе"
                  name="description"
                  minLength="2"
                  maxLength="200"
                  required
                />
                <span className="form__input-error profile-description-error"></span>
              </label>
            </fieldset>
          </>
        }
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="cards"
        title="Новое место"
        children={
          <>
            <fieldset className="form__fieldset">
              <label className="form__field">
                <input
                  type="text"
                  id="photo-name"
                  className="form__input"
                  placeholder="Название"
                  name="name"
                  minLength="2"
                  maxLength="30"
                  required
                />
                <span className="form__input-error photo-name-error"></span>
              </label>
              <label className="form__field">
                <input
                  type="url"
                  id="photo-link"
                  className="form__input"
                  placeholder="Ссылка на картинку"
                  name="link"
                  required
                />
                <span className="form__input-error photo-link-error"></span>
              </label>
            </fieldset>
          </>
        }
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
