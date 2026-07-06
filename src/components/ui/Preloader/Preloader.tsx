import { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.preloader} aria-hidden="true">
      <div className={styles.spinner}>
        <div className={styles.ring} />
        <div className={styles.ring} />
      </div>
    </div>
  );
}
