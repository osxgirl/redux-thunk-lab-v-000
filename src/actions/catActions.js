export const fetchCats = ()=> {
  return (dispatch)=> {
    // 'https://learn-co-curriculum.github.io/cat-api/cats.json'
    dispatch({type: "LOADING_CATS"})
    fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(r=> r.json())
    .then(cats=> dispatch({type: "ADD_CATS", cats: cats.images}))
  }
}
