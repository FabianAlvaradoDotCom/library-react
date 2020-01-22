import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './HomePage.module.css';

import { API_url } from '../../config/config'

import reading from '../../assets/reading.jpg';

class HomePage extends Component {

  state= {
    book_count : 0,
    show_book_count: false
  }

  componentDidMount(){
    (async() => {
      try {
        let book_list_raw = await fetch(`${API_url}/get-all-books`, {
          method: 'GET',          
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const response = await book_list_raw.json();

        this.setState( () => {
          return {
            book_count: response.length,
            show_book_count: true
          }
        });

        this.props.bookList_dispatch(response);
 
        
      } catch (error) {
        console.log(error);
      }
    })();
  }

  render(){
    return (
      <>
      <h2>Welcome</h2>
      <br/>
      <h1>Library Manager System</h1>
      <br/>
      <h2>{ this.state.show_book_count ? this.state.book_count : null} Books currently in the system</h2>
      <br/>
      <img src={reading} alt="Enjoy our selection" className={styles.main__image}/>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {    
    bookList_dispatch: (book_list) => dispatch({ type: "UPDATE", payload: book_list})
  }
}

export default connect(null, mapDispatchToProps)(HomePage);