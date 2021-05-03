let initialState = { history: [], searchTerm: ""}
const manageSearchTermsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH":
            return{
                ...state,
                history: [
                    ...state.history,
                action.term                   
                ],
                searchTerm: action.term 
            }
        default:
            return state
    }
}

export default manageSearchTermsReducer;