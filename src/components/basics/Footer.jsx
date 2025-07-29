import { useDarkMode } from '../../js/useDarkMode';

import Icon from './Icon';

import copyRightDark from '../../assets/copyright-dark.png';
import copyRightLight from '../../assets/copyright-light.png';

const Footer = () => {

  const isDark = useDarkMode();

  return (
    <div className="w-[100%] bg-[image:var(--bg-color-footer)] flex items-center justify-center py-5 px-5 text-center gap-1">
      <div className="flex items-center justify-center">
        <Icon img={isDark ? copyRightDark : copyRightLight} />
      </div>
      <p className="text-xs sm:text-lg md:text-xl font-sans font-bold text-center text-[color:var(--text-color)]">
       2025 Sofía Canizales. Todos los derechos reservados.
      </p>
    </div>
  )
}

export default Footer;