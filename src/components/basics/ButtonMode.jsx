import { useEffect, useState } from 'react';

import '../../css/buttonMode.css';

const ButtonMode = () => {

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDark(true);
    }, []);

    const toggleDarkMode = () => {
        const newIsDark = !isDark;
        document.documentElement.classList.toggle("dark", newIsDark);
        localStorage.setItem("theme", newIsDark ? "dark" : "light");
        setIsDark(newIsDark);
    };

  return (
    <div className='flex justify-end py-4 px-4'>
        <button
        className={`theme-switcher-grid ${isDark ? 'night-theme' : ''}`}
        id="theme-switcher-grid"
        aria-label="Switch theme"
        onClick={toggleDarkMode}
        >
        <div className="sun" id="sun" aria-hidden="true"></div>
        <div className="moon-overlay" id="moon-overlay" aria-hidden="true"></div>
        <div
          className="cloud-ball cloud-ball-left"
          id="ball1"
          aria-hidden="true"
        ></div>
        <div
          className="cloud-ball cloud-ball-middle"
          id="ball2"
          aria-hidden="true"
        ></div>
        <div
          className="cloud-ball cloud-ball-right"
          id="ball3"
          aria-hidden="true"
        ></div>
        <div
          className="cloud-ball cloud-ball-top"
          id="ball4"
          aria-hidden="true"
        ></div>
        <div className="star" id="star1" aria-hidden="true"></div>
        <div className="star" id="star2" aria-hidden="true"></div>
        <div className="star" id="star3" aria-hidden="true"></div>
        <div className="star" id="star4" aria-hidden="true"></div>
      </button>
    </div>
  )
}

export default ButtonMode;