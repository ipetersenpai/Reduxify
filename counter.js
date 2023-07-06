/*
basic logic of redux in 1 file
Step of logic:
*/

const { createStore } = require("redux");
//Step 1: Initial State
const initialState = {
  count: 0,
};

//Step 2: Actions [-Action] & [-Action Creator]
//increment
//decrement
//reset
//increaseByamount

//action
{
  type: "INCREMENT";
}
{
  type: "DECREMENT";
}
{
  type: "RESET";
}
{
  type: "INCREASE_BY_AMT";
}

//increase action creator
const incrementAction = () => {
  return {
    type: "INCREMENT",
  };
};
//decrement action creator
const decrementAction = () => {
  return {
    type: "DECREMENT",
  };
};
//reset action creator
const resetAction = () => {
  return {
    type: "RESET",
  };
};
//increase by amount action creator
const increaseByAmtAction = () => {
  return {
    type: "INCREASE_BY_AMT",
  };
};
//Step 3: Reducer (Logic that will make changes on our state) you also call it as a listeners
//reducer always listen to any event happening. The event is the Action
const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  } else if (action.type === "RESET") {
    return {
      count: (state.count = 0),
    };
  }
};
//Step 4: store
const store = createStore(counterReducer);

//subscribe to store
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});
//dispatch action
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
