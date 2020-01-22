import React, { Component } from 'react';
import { connect } from 'react-redux';
import { API_url } from '../../config/config';
import styles from './FormComponent.module.css'

class FormComponent extends Component{
  state= {
    title: "",
    author: "",
    year: "",
    number_pages: "",
    cover: "",
    description: "",
    _id: ""
  }

  componentDidMount(){
   this.setState((prev, props) => {
     return {...this.props.book_details}
   });

   console.log(this.props.book_details);
  }

  componentDidUpdate(){
    console.log(this.state);
  }
  
  // Generic function that handles all inputs changes
  onFieldChangeHandler = (e) => {    
    this.setState({ [e.target.id]: e.target.value });    
  }

  onFormSubmition = (e) => {
    e.preventDefault();
    (async() => {
      try {
        let update_book_raw = await fetch(`${API_url}/${this.state._id ? "edit-book" : "create-book"}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ ...this.state, id:this.state._id})
        });

        const response = await update_book_raw.json();
        console.log(response.saved_book); 
        this.props.updateBookDataForm_dispatch({
          title: "",
          author: "",
          year: "",
          number_pages: "",
          cover: "",
          description: "",
          _id: ""
        });
        this.props.updateFormShow_dispatch();
        this.props.bookList_dispatch(response[1]);
        alert("Processed successfully");
        
        
      } catch (error) {
        console.log(error);
        alert("An error occured, try again");
      }
    })();
  }


  deleteBook = (e) => {
    e.preventDefault();
    (async() => {
      try {
        let update_book_raw = await fetch(`${API_url}/delete-book`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ id:this.state._id})
        });

        const response = await update_book_raw.json();
        console.log(response); 
        this.props.updateBookDataForm_dispatch({
          title: "",
          author: "",
          year: "",
          number_pages: "",
          cover: "",
          description: "",
          _id: ""
        });
        this.props.updateFormShow_dispatch();
        this.props.bookList_dispatch(response[1]);
        alert("Processed successfully");
        
      } catch (error) {
        console.log(error);
        alert("An error occured, try again");
      }
    })();
  }

  closeFormHandler = () => {
    this.props.updateFormShow_dispatch();
  }

  editFormHandler = () => {
    this.setState((prev, props) => {
      return {editable: true}
    });
  }

  render(){
    return (
      <div className={styles.form_modal}>
      <div className={styles.detailed_view}>
      {(this.state._id === "" || this.state.editable === true) && <form onSubmit={this.onFormSubmition}>
        
          <label htmlFor="title">Title<br/>
            <input required type="text" placeholder="Please enter the book title" value={this.state.title} onChange={this.onFieldChangeHandler} id="title"/></label>
          <br/><br/>
          <label htmlFor="author">Author<br/>
          <input required type="text" placeholder="Please enter the book author" value={this.state.author} onChange={this.onFieldChangeHandler} id="author"/></label>
          <br/><br/>
          <label htmlFor="year">Publication Year<br/>
          <input required type="text" placeholder="Please enter the book year" value={this.state.year} onChange={this.onFieldChangeHandler} id="year"/></label>
          <br/><br/>
          <label htmlFor="">Number of pages<br/>
          <input required type="text" placeholder="Please enter the book number_pages" value={this.state.number_pages} onChange={this.onFieldChangeHandler} 
          id="number_pages"/></label>
          <br/><br/>
          <label htmlFor="cover">Book cover URL</label><br/>
    {/*<input required type="text" placeholder="Please enter the book cover image" value={this.state.cover} onChange={this.onFieldChangeHandler} id="cover"/>*/}
          <textarea name="cover" id="cover" rows="6" placeholder="Please enter the book cover image" value={this.state.cover} onChange={this.onFieldChangeHandler}></textarea>
          <br/>
          {/*<input required type="text" placeholder="Please enter the book description" value={this.state.description} onChange={this.onFieldChangeHandler} id="description"/>*/}
          <label htmlFor="description">Description</label><br/>
          <textarea rows="6" placeholder="Please enter the book description" value={this.state.description} onChange={this.onFieldChangeHandler} id="description"></textarea>
          <br/>
          <button type="submit">Save changes</button>
          {this.state._id !== "" && <button onClick={this.deleteBook}>Delete book</button>}
          
        </form>}

        {(this.state.editable !== true && this.state._id !== "") && <div>
        <h2>{this.state.title}</h2>
        <br/>
        <h3>{this.state.author}</h3>
        <img src={this.state.cover} className={styles.book__cover} alt={this.state.title}/><br/>
        <p>Pages: {this.state.number_pages}</p>
        <p>{this.state.description}</p>
        <button onClick={this.editFormHandler} className={styles.edit_entry}>Edit entry</button>
        </div>}
        <button onClick={this.closeFormHandler} className={styles.close_modal}>X</button>
      </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return{
    book_details: state.book_details_reducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFormShow_dispatch: () => dispatch({ type: "HIDE"}),
    updateBookDataForm_dispatch: (data_from_clicked_book) => dispatch({ type: "POPULATE_EXISTING", payload: data_from_clicked_book}),
    bookList_dispatch: (book_list) => dispatch({ type: "UPDATE", payload: book_list})        
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);






