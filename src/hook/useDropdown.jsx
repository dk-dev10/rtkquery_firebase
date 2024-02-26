import { useState, useEffect, useRef } from 'react';

const useDropdown = () => {
  const [isDrop, setIsDrop] = useState(false);

  const catMenu = useRef(null);

  const closeOpenMenus = (e) => {
    if (isDrop && !catMenu.current?.contains(e.target)) {
      setIsDrop(() => false);
    }
  };

  useEffect(() => {
    if (isDrop) {
      document.addEventListener('mousedown', closeOpenMenus);
      const close = (e) => {
        if (e.keyCode === 27) {
          setIsDrop(() => false);
        }
      };
      window.addEventListener('keydown', close);
    }

    return () => {
      document.removeEventListener('mousedown', closeOpenMenus);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDrop]);
  return { catMenu, setIsDrop, isDrop };
};

export default useDropdown;
