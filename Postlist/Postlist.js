const { createStore } = require("redux");

const initialState = {
  posts: [],
};

//add a post
const addPostaction = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};

//remove a post
const removePostAction = (id) => {
  return {
    type: "REMOVE_POST",
    payload: id,
  };
};

//reducer
const postReducer = (state = initialState, action) => {
  if (action.type === "ADD_POST") {
    return {
      posts: [...state.posts, action.payload],
    };
  } else if (action.type === "REMOVE_POST") {
    return {
      posts: state.posts.filter((post) => {
        return post.id !== action.payload;
      }),
    };
  }
};

//store
const store = createStore(postReducer);

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
store.dispatch(removePostAction(1));
