import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <div className="popup edit-avatar-popup">
        <div className="popup__container">
          <form className="form edit-avatar-form" name="form-photo" novalidate>
            <h2 className="form__title">Обновить аватар</h2>
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
            <button type="submit" className="form__save-button">
              Сохранить
            </button>
          </form>
          <button
            type="button"
            className="popup__close-button edit-avatar-popup__close-button"
            aria-label="Закрыть поп-ап"
          ></button>
        </div>
      </div>
      <div className="popup edit-popup">
        <div className="popup__container">
          <form className="form edit-form" name="form-edit-info" novalidate>
            <h2 className="form__title">Редактировать профиль</h2>
            <fieldset className="form__fieldset">
              <label className="form__field">
                <input
                  type="text"
                  id="profile-name"
                  className="form__input"
                  placeholder="Имя"
                  name="name"
                  minlength="2"
                  maxlength="40"
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
                  minlength="2"
                  maxlength="200"
                  required
                />
                <span className="form__input-error profile-description-error"></span>
              </label>
            </fieldset>
            <button type="submit" className="form__save-button">
              Сохранить
            </button>
          </form>
          <button
            type="button"
            className="popup__close-button edit-popup__close-button "
            aria-label="Закрыть поп-ап"
          ></button>
        </div>
      </div>
      <div className="popup add-popup">
        <div className="popup__container">
          <form className="form add-cards-form" name="form-photo" novalidate>
            <h2 className="form__title">Новое место</h2>
            <fieldset className="form__fieldset">
              <label className="form__field">
                <input
                  type="text"
                  id="photo-name"
                  className="form__input"
                  placeholder="Название"
                  name="name"
                  minlength="2"
                  maxlength="30"
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
            <button type="submit" className="form__save-button">
              Создать
            </button>
          </form>
          <button
            type="button"
            className="popup__close-button add-popup__close-button"
            aria-label="Закрыть поп-ап"
          ></button>
        </div>
      </div>
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
      <div className="popup confirm-popup">
        <div className="popup__container">
          <form className="form confirm-form" name="form-confirm" novalidate>
            <h2 className="confirm-popup__title">Вы уверены?</h2>
            <button type="submit" className="confirm-popup__button">
              Да
            </button>
          </form>
          <button
            type="button"
            className="popup__close-button confirm-popup__close-button"
            aria-label="Закрыть поп-ап"
          ></button>
        </div>
      </div>
      <template id="photo-cards-element">
        <li className="photo-cards__item">
          <img src="#" alt="Фотография" className="photo-cards__photo" />
          <div className="photo-cards__description">
            <h2 className="photo-cards__text"></h2>
            <div className="photo-cards__like-block">
              <button
                className="photo-cards__button-like"
                type="button"
                aria-label="Поставить лайк"
              ></button>
              <span className="photo-cards__like-counter"></span>
            </div>
          </div>
          <button
            className="photo-cards__button-del"
            type="button"
            aria-label="Удалить фото"
          ></button>
        </li>
      </template>
    </>
  );
}

export default App;
