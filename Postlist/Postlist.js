const { createStore, combineReducers } = require("redux");

const initialState = {
  posts: [],
};

const userInitialState = {
  users: [],
};
//action constant

const addPost = "ADD_POST";
const removePost = "REMOVE_POST";
const addUser = "ADD_USER";

//add a post
const addPostaction = (post) => {
  return {
    type: addPost,
    payload: post,
  };
};

//remove a post
const removePostAction = (id) => {
  return {
    type: removePost,
    payload: id,
  };
};

const addUserAction = (user) => {
  return {
    type: addUser,
    payload: user,
  };
};
//reducer
const postReducer = (state = initialState, action) => {
  if (action.type === addPost) {
    return {
      posts: [...state.posts, action.payload],
    };
  } else if (action.type === removePost) {
    return {
      posts: state.posts.filter((post) => {
        return post.id !== action.payload;
      }),
    };
  } else {
    return state;
  }
};

const userReducer = (state = userInitialState, action) => {
  if (action.type === addUser) {
    return {
      users: [...state.users, action.payload],
    };
  }
};

const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
});

//store
const store = createStore(rootReducer);

//subscribe
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

//dispatch
store.dispatch(
  addPostaction({
    id: 1,
    title: "elon musk vs Mark zuckerberg",
    description: "billionaire vs billionaire",
  })
);
store.dispatch(
  addPostaction({
    id: 2,
    title: "Tesla car can fly",
    description: "yes it can fly now!",
  })
);
store.dispatch(removePostAction(2));

store.dispatch(
  addUserAction({
    userid: 1,
    firstname: "Peter Francis",
    lastnameL: "Robante",
  })
);
