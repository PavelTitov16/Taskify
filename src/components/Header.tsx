import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faMagnifyingGlass } from '../faIcons';

export const Header = () => {
  return (
		<header className='w-full py-6 px-5_5 flex justify-between items-center'>
			<div className='flex items-center'>
				<FontAwesomeIcon icon={faBars} className='w-7 h-7' />
				<button className='mx-2 px-7 py-3 rounded-full bg-gray3 flex justify-center items-center font-inter font-medium text-dark5 leading-6 hover:bg-primary hover:text-white duration-300'>
					Add board
				</button>
				<form action="search" className="w-[410px] ml-2 flex gap-4 justify-between items-center border-2 border-stroke rounded-3xl pr-5">
					<input
						type="text"
						className="w-full h-full px-5 py-3 flex bg-transparent items-center border-0 rounded-3xl font-inter font-normal text-dark6 placeholder:text-dark6 placeholder:font-inter"
						placeholder="Search"
						autoComplete="off"
					/>
					<FontAwesomeIcon icon={faMagnifyingGlass} className='text-dark5 w-3.5' />
				</form>
			</div>
			<div className='flex gap-4 items-center'>
				<span className='font-inter font-medium text-sm text-primary leading-5'>Login</span>
				<div className='w-9 h-9 bg-secondaryText rounded-full flex items-center justify-center'>
					<FontAwesomeIcon icon={faUser} className='text-white w-6' />
				</div>
			</div>
		</header>
	)
}
