import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

  const avatarRef = React.useRef('');

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value
    })
  }

  return (
    <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
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
                  ref={avatarRef}
                />
                <span className="form__input-error avatar-link-error"></span>
              </label>
            </fieldset>
          </>
        }
        buttonText="Сохранить"
      />
  )
}

export default EditAvatarPopup;
