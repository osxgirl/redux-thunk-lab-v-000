
export default function catsReducer(state={cats:[], loading:false}, action) {
  // console.log(`catsReducer got sent ${action.type}`, action)
  switch (action.type) {
    case "LOADING_CATS":
      return {
        ...state,
        loading: true
      }
    case "ADD_CATS":
      return {
        ...state,
        cats: action.cats,
        loading: false
      }
  
    default:
      return state
  }
}
