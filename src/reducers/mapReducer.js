// mapReducer.js
const initialState = {
    selectedRegion: '',
    isNightMode: false,
};

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_REGION':
            return {
                ...state,
                selectedRegion: action.payload,
            };
        case 'TOGGLE_NIGHT_MODE':
            return {
                ...state,
                isNightMode: !state.isNightMode,
            };
        default:
            return state;
    }
};

export default mapReducer;
