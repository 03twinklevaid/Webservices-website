import showHomeScreen from '../actions/action';
// import SHOW_HOME from '../constants';
const initialState = { showHome: false };
const homeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SHOW_HOME' : return {
            showHome: true
        }
        default : return state
    }
}

export default homeReducer;