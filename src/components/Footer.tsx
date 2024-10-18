import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSheetPlastic, faPhoneVolume, faGithub, faFacebookF, faLinkedinIn, faYoutube } from '../faIcons';

export const Footer = () => {
  return (
		<footer className='w-full py-8 px-40 flex flex-col gap-12 items-center'>
			<div className='flex justify-between items-center'>
				<div className='flex flex-col gap-4 w-1/4 text-left'>
					<div className='flex gap-1 items-center'>
						<div className='w-7 h-7 bg-primary rounded-full flex items-center justify-center'>
							<FontAwesomeIcon icon={faSheetPlastic} className='text-white h-5' />
						</div>
						<span className='font-inter font-bold text-2xl text-font'>Taskify</span>
					</div>
					<p className='font-inter font-normal text-base text-primaryText'>
						Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. 
					</p>
					<div className='flex gap-2 items-center'>
						<FontAwesomeIcon icon={faPhoneVolume} className='text-primary h-5' />
						<span className='font-inter font-medium text-sm text-dark leading-5'>+7 (459) 322 23 33</span>
					</div>
				</div>
				<div className='flex gap-12 pb-6'>
					<div className='flex flex-col gap-6 text-left'>
						<p className='font-inter font-semibold text-lg text-dark'>
							Team
						</p>
						<div className='flex flex-col gap-3'>
							<span className='font-inter font-normal text-base text-primaryText'>About Landio</span>
							<span className='font-inter font-normal text-base text-primaryText'>Contact & Support</span>
							<span className='font-inter font-normal text-base text-primaryText'>Success History</span>
						</div>
					</div>
					<div className='flex flex-col gap-6 text-left'>
						<p className='font-inter font-semibold text-lg text-dark'>
							Follow Us On
						</p>
						<div className='flex gap-3.5 items-center'>
							<div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center'>
								<FontAwesomeIcon icon={faFacebookF} className='text-white h-4' />
							</div>
							<div className='w-8 h-8 bg-transparent border border-stroke rounded-full flex items-center justify-center'>
								<FontAwesomeIcon icon={faGithub} className='text-dark h-4' />
							</div>
							<div className='w-8 h-8 bg-transparent border border-stroke rounded-full flex items-center justify-center'>
								<FontAwesomeIcon icon={faYoutube} className='text-dark h-4' />
							</div>
							<div className='w-8 h-8 bg-transparent border border-stroke rounded-full flex items-center justify-center'>
								<FontAwesomeIcon icon={faLinkedinIn} className='text-dark h-4' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<span className='font-inter font-normal text-base text-primaryText'>© 2024 Taskify</span>
		</footer>
	)
}
