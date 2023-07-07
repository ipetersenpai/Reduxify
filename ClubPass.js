const { createStore } = require("redux");

const initialState = {
  customerAge: 18,
  output: "",
};

const customerAgeRequire = () => {
  return {
    type: 16,
  };
};

const ageReducer = (state = initialState, action) => {
  if (action.type === 18 || action.requireAge >= 18) {
    return {
      output: "You can enter the club!",
    };
  } else {
    return {
      output: "You cannot enter the club!",
    };
  }
};
const storage = createStore(ageReducer);

storage.subscribe(() => {
  const data = storage.getState();
  console.log(data);
});

storage.dispatch(customerAgeRequire());
