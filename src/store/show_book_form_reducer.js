const initial_state = {
  show_book_form: false
}

const show_book_form_reducer = (state= initial_state, action) => {
  switch (action.type){
    case "SHOW":
        return { show_book_form: true};
    case "HIDE":
      return { show_book_form: false};
    default: 
      return state;
  }
}

export default show_book_form_reducer;