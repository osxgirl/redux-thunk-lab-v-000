import React, { Component } from 'react';
import { connect } from 'react-redux';
import CatList from './CatList';
import {fetchCats} from './actions/catActions';

class App extends Component {
  componentDidMount() {
    this.props.fetchCats()
  }
  render() {
    return (
      <div>
        <h1>CatBook</h1>
        {(this.props.loading) ? <h4>loading pics</h4> : <h4>pics loaded!</h4>}
        <CatList catPics={this.props.catPics}/>
        {/* add CatList component here */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCats: () => dispatch(fetchCats())
})
const mapStateToProps = (state) => ({
  catPics: state.cats,
  loading: state.loading
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
