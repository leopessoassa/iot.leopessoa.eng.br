import { useState, useEffect } from 'react';

export function useStickyHeader(): boolean {
  const [isSticky, setIsSticky] = useState<boolean>(window.scrollY > 100);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isSticky;
}
