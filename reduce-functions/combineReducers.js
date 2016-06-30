/* From https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch?course=getting-started-with-redux */
/* Keeping this as a reference because it's awesome */

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        );
        return nextState;
      },
      {}
    );
  };
};
