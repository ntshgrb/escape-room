import * as S from './message.styled';
import { useAppSelector } from '../../../hooks';

function Message(): JSX.Element | null {
  const message = useAppSelector((state) => state.UTILITY.message);
  console.log(message);
  if (message) {
    return (
      <S.Message>
        {message}
      </S.Message>
    );
  }

  return null;
}

export default Message;
