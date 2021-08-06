import { showMessage } from "./notification";
import agent from "../../services/agent.service";
import { push } from "connected-react-router";
import { MESSAGE_TYPE } from "../constant";
import { closeModal } from "./modal";

// initial values
const timeline = {
  loadingPosts: "",
  posts: { data: [], meta: {} },
  post: {},
  postsByUserId: [],
  postByPostId: {},
  totalPostCount: 0,
  PostCountByUser: 0
};

// Action types
const LOADING_POSTS = "LOADING_POSTS";
const LOAD_POSTS = "LOAD_POSTS";
const LOAD_POST_BY_POSTID = "LOAD_POST_BY_POSTID";
const LOAD_POSTS_BY_USERID = "LOAD_POSTS_BY_USERID";
const LOAD_TOTAL_POST_COUNT = "LOAD_TOTAL_POST_COUNT";
const LOAD_USER_POST_COUNT = "LOAD_USER_POST_COUNT";
const POSTS_EDITED = "POSTS_EDITED";
const EMPTY_POSTS = "EMPTY_POSTS";

// Reducer
export default function reducer(state = timeline, action = {}) {
  switch (action.type) {
    case LOADING_POSTS:
      return {
        ...state,
        loadingPosts: action.payload,
      };
    case LOAD_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: ""
      };
    case LOAD_POST_BY_POSTID:
      return {
        ...state,
        posts: { data: [action.payload], meta: {} },
      };
    case LOAD_POSTS_BY_USERID:
      return {
        ...state,
        postsByUserId: action.payload,
      };
    case LOAD_TOTAL_POST_COUNT:
      return {
        ...state,
        totalPostCount: action.payload,
      };
    case LOAD_USER_POST_COUNT:
      return {
        ...state,
        PostCountByUser: action.payload,
      };
    case EMPTY_POSTS:
      return {
        ...state,
        posts: { data: [], meta: {} }
      };
    case POSTS_EDITED:
      const newPostArray = state.posts.data.map(function (item) {
        if (item.id === action.payload.id) {
          return { ...item, title: action.payload.title, body: action.payload.body, postImage: action.payload.postImage }
        }
        return item;
      })
      return {
        ...state,
        posts: { ...state.posts, data: newPostArray }
      };
    default:
      return state;
  }
}

//Action Creators
export const postsLoaded = (data) => ({
  type: LOAD_POSTS,
  payload: data,
});
export const postByPostIdLoaded = (data) => ({
  type: LOAD_POST_BY_POSTID,
  payload: data,
});
export const totalPostCountLoaded = (data) => ({
  type: LOAD_TOTAL_POST_COUNT,
  payload: data,
});
export const loading = (data) => ({
  type: LOADING_POSTS,
  payload: data
});
export const postEdited = (data) => ({
  type: POSTS_EDITED,
  payload: data
});
export const emptyPostArray = () => ({
  type: EMPTY_POSTS,
});



// Actions
export function createPost(post) {
  return dispatch => {
    // dispatch(isLoading());
    return agent.Post.save(post).then(
      response => {
        //handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Create New Post",
            message: "New post created successfully",
          })
        );
        dispatch(closeModal());
        dispatch(loadPosts(1, 10));
        dispatch(loading("postSuccess"));
        dispatch(loading(null));
      },
      (error) => {
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  }
}

export function editPost(id, post) {
  return dispatch => {
    // dispatch(isLoading());
    return agent.Post.edit(id, post).then(
      response => {
        //handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Update Post",
            message: "Post edited successfully",
          })
        );
        dispatch(postEdited(response));
        dispatch(loading("postSuccess"));
        dispatch(loading(null));
      },
      (error) => {
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  }
}

export function loadPosts(page, take, loadingType) {
  return dispatch => {
    dispatch(loading(loadingType));
    return agent.Post.load(page, take).then(
      response => {
        //handle success
        dispatch(loading(null));
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Load Posts",
            message: "Posts Loaded",
          })
        );
        dispatch(postsLoaded(response));
      },
      (error) => {
        // handle error
        dispatch(loading(null));
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  }
}

export function loadTotalPostCount() {
  return dispatch => {
    // dispatch(isLoading());
    return agent.Post.postCount().then(
      response => {
        dispatch(totalPostCountLoaded(response));
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  }
}

export function loadPostsByUserId(page, take) {
  return dispatch => {
    // dispatch(isLoading());
    return agent.Post.loadByUserId(page, take).then(
      response => {
        //handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Load Posts",
            message: "Posts Loaded",
          })
        );
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  }
}

export function viewPost(id, loadingType) {
  return dispatch => {
    dispatch(loading(loadingType));
    return agent.Post.view(id).then(
      response => {
        //handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Load Post",
            message: "Post Loaded",
          })
        );
        dispatch(postByPostIdLoaded(response));
        dispatch(loading(null));
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
        dispatch(emptyPostArray());
        dispatch(loading(null));
      }
    );
  }
}

export function deletePost(id, deleteType) {
  return dispatch => {
    // dispatch(isLoading());
    return agent.Post.delete(id).then(
      response => {
        //handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Delete Post",
            message: "Post deleted successfully",
          })
        );
        if (deleteType === "fromViewPost") {
          dispatch(push("/timeline"));
        }
        else {
          dispatch(loadPosts(1, 10));
        }
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  }
}

export function likePost(id) {
  return dispatch => {
    return agent.Post.like(id).then(
      response => {
        //handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Like Post",
            message: "Post liked!!",
          })
        );
        dispatch(loadPosts(1, 10));
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  }
}

export function dislikePost(id) {
  return dispatch => {
    return agent.Post.dislike(id).then(
      response => {
        //handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Dislike Post",
            message: "Post disliked!!",
          })
        );
        dispatch(loadPosts(1, 10));
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  }
}