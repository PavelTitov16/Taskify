import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import './i18n';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
