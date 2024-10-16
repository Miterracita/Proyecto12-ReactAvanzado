
const showReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_FORM':
            return { ...state, showForm: true, showList: false, showCalendar: false, editingIndex: action.payload };
        case 'HIDE_FORM':
            return { ...state, showForm: false, editingIndex: null };
        case 'TOGGLE_LIST':
            return { ...state, showList: !state.showList, showCalendar: false };
        case 'TOGGLE_CALENDAR':
            return { ...state, showCalendar: !state.showCalendar, showList: false };
        default:
            return state;
    }
};

export default showReducer;