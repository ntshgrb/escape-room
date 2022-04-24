import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useRef } from 'react';

const BookingModal = ({onCloseBtnClick, peopleCount}) => {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const countRef = useRef(null);

  const onSubmit = () => {
    //тут диспатчим формдату
  };

  const nameIsEmpty = (name) => name.trim() === '';

  const onNameChange = () => {
    if (nameRef !== null && nameIsEmpty(nameRef.current.value)) {
      nameRef.current.setCustomValidity('Имя не может состоять из пробелов');
    } else if (nameRef !== null) {
      nameRef.current.setCustomValidity('');
    }
  };

  const countIsValid = (count) => (count >= peopleCount[0] && count <= peopleCount[1]);

  const onCountChange = () => {
    if (countRef.current !== null && !countIsValid(countRef.current.value)) {
      countRef.current.setCustomValidity(`В это квесте могут участвовать от ${peopleCount[0]} до ${peopleCount[1]} человек`);
    } else if (countRef.current !== null) {
      countRef.current.setCustomValidity('');
    }
  };

  const phoneIsValid = (phone) => {
    const phoneCheck = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;
    return phoneCheck.test(phone);
  };

  const onPhoneChange = () => {
    if (phoneRef.current !== null && !phoneIsValid(phoneRef.current.value)) {
      phoneRef.current.setCustomValidity('Некорректный номер');
    } else if (phoneRef.current !== null) {
      phoneRef.current.setCustomValidity('');
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };


  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={onCloseBtnClick}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={handleFormSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
              ref={nameRef}
              onChange={onNameChange}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              required
              ref={phoneRef}
              onChange={onPhoneChange}
              pattern="^-?[0-9]\d*\.?\d*$"
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
              ref={countRef}
              onChange={onCountChange}
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;
