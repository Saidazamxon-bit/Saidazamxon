import React from 'react';
import styles from './DarkModeToggle.module.css';

function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
  return (
    <div className={styles.box}>
    <label aria-checked={isDarkMode} role="switch" className={styles.switch}>
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />

      <span className={styles.slider}>
        <span className={styles.sliderInner}></span>
      </span>
    </label>
    </div>
  );
}

export default DarkModeToggle;
