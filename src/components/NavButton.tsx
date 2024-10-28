import { Link } from 'react-router-dom';

interface NavButtonProps {
  buttonText: string;
  link: string;
}

export const NavButton: React.FC<NavButtonProps> = ({ buttonText, link }) => {
  return (
    <>
      <Link
        to={link}
        className="rounded-full bg-primary px-3.5 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-primary hover:outline hover:outline-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 duration-300"
      >
        {buttonText}
      </Link>
    </>
  );
};
