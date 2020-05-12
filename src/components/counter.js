import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button className="btn btn-primary btn-lg shadow-none"
        onClick={dec}
      >DEC
      </button>
      <button className="btn btn-primary btn-lg shadow-none ml-2 mr-2"
        onClick={inc}
      >INC
      </button>
      <button className="btn btn-info btn-lg shadow-none"
        onClick={rnd}
      >RND
      </button>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    counter: state
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// };

export default connect(mapStateToProps, actions)(Counter);
