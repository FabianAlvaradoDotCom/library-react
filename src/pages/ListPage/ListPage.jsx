import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ListPage.module.css';

import BooksGridComponent from './BooksGridComponent/BooksGridComponent';

class ListPage extends Component {

  onThumbnailClick = (data_from_clicked_book) => {    

    if(data_from_clicked_book === "New book"){
      this.props.updateFormShow_dispatch();
      this.props.createBookDataForm_dispatch({
        title: "",
        author: "",
        year: "",
        number_pages: "",
        cover: "",
        description: "",
        _id: ""
      });
    }else{
      this.props.updateFormShow_dispatch();
      this.props.updateBookDataForm_dispatch(data_from_clicked_book);
    }    
  }

  render(){
    return (
      <>
      <h1>Book Catalog</h1>
      <br/>
      <h2>Click on any of the items to have a detailed description</h2>      
      <BooksGridComponent book_thumbnail_click_handler_prop={this.onThumbnailClick} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    show_book_form: state.show_book_form_reducer.show_book_form
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFormShow_dispatch: () => dispatch({ type: "SHOW"}),
    updateBookDataForm_dispatch: (data_from_clicked_book) => dispatch({ type: "POPULATE_EXISTING", payload: data_from_clicked_book}),
    createBookDataForm_dispatch: (blank_form) => dispatch({ type: "POPULATE_BLANK", payload: blank_form}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);