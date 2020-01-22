import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../../pages/HomePage/HomePage';
import ListPage from '../../pages/ListPage/ListPage';
import styles from './MainComponent.module.css'

const MainComponent = () => {
  return (
    <main className={styles.main}>
      <Route path="/" exact component={HomePage}/>
      <Route path="/books-list" exact component={ListPage} />
    </main>
  );
}

export default MainComponent;