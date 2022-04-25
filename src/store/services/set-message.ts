import { clearMessageAction } from 'store/api-actions';
import { store } from '..';
import { setMessage } from '../reducers/utility';

export const showMessage = (message: string): void => {
    store.dispatch(setMessage(message));
    store.dispatch(clearMessageAction());
};

