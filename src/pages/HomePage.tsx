import { useTranslation } from 'react-i18next';

import { Button } from '../components/Button.tsx'

import pic from '../assets/homepage_main-pic.png'
import logo from '../assets/LOGO_big.svg'

export const HomePage = () => {
  const { t } = useTranslation()

  return (
    <>
      <main className='mx-auto rounded-[16px] bg-white flex justify-between overflow-hidden drop-shadow-xl '>
        <div className='m-auto h-[305px] w-[336px] py-10 px-5 flex flex-col justify-between items-center'>
          <img className='mx-auto' src={logo} alt="logo" />
          <p>Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. </p>
          <Button buttonText={t('welcome')} link='/auth' />
        </div>
        <div className='m-auto min-h-[305px] w-[456px]'>
          <img src={pic} alt="main picture" />
        </div>
      </main>
    </>
  );
};
