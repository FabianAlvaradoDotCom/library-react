const initial_state = {
  book_list: []
};

const book_list_reducer = (state= initial_state, action) => {
  switch (action.type){
    case "UPDATE": 
        return { book_list: action.payload};   
    default: 
      return state;
  }
}

export default book_list_reducer;