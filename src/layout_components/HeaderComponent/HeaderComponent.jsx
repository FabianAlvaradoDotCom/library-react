import React from 'react';
import NavigationComponent from './NavigationComponent/NavigationComponent'
import styles from './HeaderComponent.module.css';

const HeaderComponent = () => {
  return (
    <header className={styles.header}>
      <NavigationComponent />
    </header>
  );
}

export default HeaderComponent;