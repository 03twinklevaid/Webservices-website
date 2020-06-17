const initialState = {
    viewOfferings : false
}

const viewOfferingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'VIEW_OFFERINGS' : return {    
            ...state,
            viewOfferings : true
        }
        case 'VIEW_LESS' : return {
            ...state,
            viewOfferings : false
        }
        default : return state
        
    }
}

export default viewOfferingsReducer;