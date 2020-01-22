import React from 'react';
import styles from './BooksGridComponent.module.css';

import { useSelector } from 'react-redux';

const BooksGridComponent = (props) => {



  const prueba = useSelector(state => state.book_list_reducer.book_list);

  console.log(prueba);


  return (
    <div className={styles.books_container}>
      <div className={styles.book__add_book} onClick={props.book_thumbnail_click_handler_prop.bind(this, "New book")}>
      <br/><br/><br/><br/><br/>
      <p className={styles.book__title}>Enter a new book into the system</p>
      <p style={{fontSize: "6rem", margin:0, padding:0}}>&#10549;</p>
        </div>
      {prueba.map( (book, index) => {
        return <div key={book._id} className={styles.book} onClick={props.book_thumbnail_click_handler_prop.bind(this, book)}>
          <h3 className={styles.book__title}>{book.title}</h3>
          <img src={book.cover} className={styles.book__cover} alt={book.title}/>
          <p className={styles.book__author}>{book.author}</p>
          <p className={styles.book__year}>{book.year}</p>
        </div>
      })}
    </div>
  );

}

export default BooksGridComponent;