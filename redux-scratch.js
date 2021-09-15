function createStore(reducer) {
  let state;
  let listeners = [];

  dispatch({});

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    state = reducer(state, action);

    listeners.forEach((x) => x());   // ניידע כל הקומפ שהתבצע שינוי בסטט
  }

  function getState() {
    return state;
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

module.exports.createStore = createStore;
