import React, { Component } from 'react';
import { connect} from 'react-redux';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import HeaderComponent from './layout_components/HeaderComponent/HeaderComponent';
import MainComponent from './layout_components/MainComponent/MainComponent';
import FooterComponent from './layout_components/FooterComponent/FooterComponent';
import OverlayComponent from './layout_components/OverlayComponent/OverlayComponent';
import FormComponent from './layout_components/FormComponent/FormComponent';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <HeaderComponent data-test="app-header" />
        <MainComponent data-test="app-main" />
        <FooterComponent data-test="app-footer" />
        {!<OverlayComponent data-test="app-overlay" />}
        {this.props.book_details && <FormComponent data-test="form-component" />}
      </div>
      </BrowserRouter>
    );
  }
}


const mapStateToProps = (state) => {
  return{
    book_details: state.show_book_form_reducer.show_book_form
  }
}


export default connect(mapStateToProps)(App);

