const initialState = {
  isLoggedIn: false,
  user: undefined,
  hotels: [],
  bookings: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.data,
        isLoggedIn: true,
      }
    case 'LOGOUT':
      return {
        ...state,
        user: {},
        isLoggedIn: false
      }
    case 'GET_HOTELS':
      return {
        ...state,
        hotels: action.data,
      }
    case 'GET_BOOKINGS':
      return {
        ...state,
        bookings: action.data,
      }
    default: 
      return {
        ...state,
      }
  }
}

export default reducer;
