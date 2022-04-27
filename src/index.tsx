import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchQuestsAction } from './store/api-actions';

store.dispatch(fetchQuestsAction());

render(
  <StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
