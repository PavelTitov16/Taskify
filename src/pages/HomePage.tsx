import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { RootState, increment, decrement } from '../store';

import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

export const HomePage = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-center">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>

      <div>
        <h2>{t('welcome')}</h2>
      </div>
    </>
  );
};
