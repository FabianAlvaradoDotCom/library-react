import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationComponent.module.css';

const NavigationComponent = () => {
  return (
    <ul>
      <li><NavLink to="/" exact activeClassName={styles.active_link}>Home</NavLink></li>
      <li><NavLink to="/books-list" exact activeClassName={styles.active_link}>Books List</NavLink></li>
    </ul>
  );
}

export default NavigationComponent;