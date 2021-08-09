const catsReducer = (state = {
    cats: [],
    loading: false
    }, action) => {

        switch (action.type) {
            case 'LOADING_CATS':
                return {
                    ...state,
                    cats: [...state.cats],
                    loading: true
                }
            case 'ADD_CATS':
                return {
                    ...state,
                    cats: action.cats, //state preservation must be handles in action creator
                    loading: false
                }   
        
            default:
                return state;
        }
    }
export default catsReducer