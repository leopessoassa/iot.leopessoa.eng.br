import { useState, useEffect } from 'react';

interface UseScrollToTopReturn {
  isVisible: boolean;
  scrollToTop: () => void;
}

export function useScrollToTop(): UseScrollToTopReturn {
  const [isVisible, setIsVisible] = useState<boolean>(window.scrollY > 300);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { isVisible, scrollToTop };
}
