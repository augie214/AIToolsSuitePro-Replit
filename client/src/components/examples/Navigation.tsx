import { useState } from 'react';
import Navigation from '../Navigation';

export default function NavigationExample() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  );
}