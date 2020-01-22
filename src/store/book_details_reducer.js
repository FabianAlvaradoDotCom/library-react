const initial_state = {
  title: "",
  author: "",
  year: "",
  number_pages: "",
  cover: "",
  description: "",
  _id: ""
};

const book_details_reducer = (state= initial_state, action) => {
  switch (action.type){
    case "POPULATE_EXISTING": 
        return { ...action.payload};
    case "POPULATE_BLANK": 
      return { ...action.payload};    
    default: 
      return state;
  }
}

export default book_details_reducer;