import { createStore } from 'redux';

const reducer = (state = 0, action) => {

  // if (action.type === 'INC') {
  //   return state + 1;
  // }

  switch (action.type) {
    case 'INC':
      return state + 1;

    default:
      return state;
  }
}

const store = createStore(reducer);
// получать нотификации об изменениях:
store.subscribe(() => {
  console.log(store.getState());
});

// обрабатывать новый action:
store.dispatch({ type: 'INC' })
store.dispatch({ type: 'INC' })
