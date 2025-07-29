import { useDarkMode } from '../../js/useDarkMode';

import Nav from './components/Nav';

import homeDark from '../../assets/home-dark.png';
import aboutDark from '../../assets/profile-dark.png';
import codeDark from '../../assets/code-dark.png';
import homeLight from '../../assets/home-light.png';
import aboutLight from '../../assets/profile-light.png';
import codeLight from '../../assets/code-light.png';

const Header = () => {

  const isDark = useDarkMode();

  const itemsMenu = [
    {route : '/', img : isDark ? homeDark : homeLight},
    {route: '/about', img: isDark ? aboutDark : aboutLight},
    {route: '/projects', img: isDark ? codeDark : codeLight},
  ];

  return (
    <Nav  itemsMenu={itemsMenu}></Nav>
  )
}

export default Header;