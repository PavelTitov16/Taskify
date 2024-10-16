import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState, increment, decrement } from './store';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSheetPlastic, faUser } from './faIcons';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <>
        <div className='w-9 h-9 bg-secondaryText rounded-full flex items-center justify-center'>
          <FontAwesomeIcon icon={faUser} className='text-white w-6' />
        </div>
        <div className='w-7 h-7 bg-primary rounded-full flex items-center justify-center'>
          <FontAwesomeIcon icon={faSheetPlastic} className='text-white w-6' />
        </div>
      <div className='flex justify-center'>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1 className="text-4xl font-bold underline">
        Hello Tailwind!
      </h1>
      <div>
        <h2>{t('welcome')}</h2>
      </div>
    </>
  )
}

export default App
