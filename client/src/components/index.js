import HeadComponent from './HeadComponent';
import MainComponent from './MainComponent';
import Navbar from './Navbar';
import Profile from './Profile';
import Footer from './Footer';
import Experience from './Experience';
import Project from './Project';
import FooterMain from './FooterMain';

const formatDate = (originalDate) => {
  const date = new Date(originalDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export {
	HeadComponent,
	MainComponent,
	Navbar,
	Profile,
	Footer,
	Experience,
	Project,
	FooterMain,
	formatDate,
};