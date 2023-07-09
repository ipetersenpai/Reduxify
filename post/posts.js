const { createStore, applyMiddleware } = require("redux");
const axios = require("axios");
const thunk = require("redux-thunk").default;

const REQUEST_STARTED = "REQUEST_STARTED";
const REQUEST_SUCCESS = "REQUEST_SUCCESS";
const REQUEST_FAILED = "REQUEST_FAILED";

const initialState = {
  posts: [],
  error: "",
  loading: false,
};

// Actions
const fetchPostRequest = () => {
  return {
    type: REQUEST_STARTED,
  };
};
const fetchPostSuccess = (post) => {
  return {
    type: REQUEST_SUCCESS,
    payload: post,
  };
};
const fetchPostfailed = (error) => {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
};

//Action to make the request
const fetchPosts = () => {
  return async (dispatch) => {
    try {
      //dispatch
      dispatch(fetchPostRequest());
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      //request success
      dispatch(fetchPostSuccess(data));
    } catch (error) {
      //action
      dispatch(fetchPostfailed(error.message));
    }
  };
};

// Reducer
const postReducer = (state = initialState, action) => {
  if (action.type === REQUEST_STARTED) {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === REQUEST_SUCCESS) {
    return {
      ...state,
      posts: action.payload,
      loading: false,
    };
  } else if (action.type === REQUEST_FAILED) {
    return {
      ...state,
      error: action.payload,
    };
  }
};
// Store
const store = createStore(postReducer, applyMiddleware(thunk));
//subscribe
store.subscribe(() => {
  data = store.getState();
  console.log(data);
});
// Dispatch
store.dispatch(fetchPosts());
