export const initialState = {
    medications: []
  };
  
  export const medicationsReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_MEDICATION':
        return { ...state, medications: [...state.medications, action.payload] };
      case 'REMOVE_MEDICATION':
        return { ...state, medications: state.medications.filter((_, index) => index !== action.payload) };
      default:
        return state;
    }
  };
  