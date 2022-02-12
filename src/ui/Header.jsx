import logoML from '../assets/images/mercado-libre-logo.png';
import MenuItems from './MenuItems';
import './Header.css';

const Header = () => {
  const menuItems = [
    { link: '/', name: 'Home' },
    { link: '/about', name: 'About' },
    { link: '/contact', name: 'Contact' },
    { link: '/products', name: 'Products' },
  ];

  return (
    <div className='container'>
      <nav className='header'>
        <img src={logoML} alt='Logo' className='logo-img' />
        <MenuItems menuItems={menuItems} />
      </nav>
    </div>
  );
};

export default Header;
