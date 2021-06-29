import { push } from "connected-react-router";
import { showMessage } from "./notification";
import agent from "../../services/agent.service";
import { MESSAGE_TYPE } from "../constant";
import { closeModal } from "./modal";

// initial values
const timeline = {
  loading: "",
  posts: [],
  post: {},
  postsByUserId: [],
  postByPostId: {},
  totalPostCount: "",
  PostCountByUser: ""
};

// Action types
const LOADING = "LOADING";
const LOAD_POST = "LOAD_POST";
const LOAD_POSTS = "LOAD_POSTS";
const LOAD_POST_BY_POSTID = "LOAD_POST_BY_POSTID";
const LOAD_POSTS_BY_USERID = "LOAD_POSTS_BY_USERID";
const LOAD_TOTAL_POST_COUNT = "LOAD_TOTAL_POST_COUNT";
const LOAD_USER_POST_COUNT = "LOAD_USER_POST_COUNT";

// export function isLoading(){
//     return {type: LOADING}
// }


// Reducer
export default function reducer(state = timeline, action = {}) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case LOAD_POST:
      return {
        ...state,
        post: action.payload,
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
        postByPostId: action.payload,
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
  type: LOADING,
  payload: data
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
        dispatch(loadPosts(1, 10));
        dispatch(closeModal());
      },
      (error) => {
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  }
}

export function loadPosts(page, take, loadingType) {
  return dispatch => {
    dispatch(loading());
    return agent.Post.load(page, take).then(
      response => {
        //handle success
        dispatch(loading(loadingType));
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

export function viewPost(id) {
  return dispatch => {
    // dispatch(isLoading());
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
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  }
}

export function deletePost(id) {
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
        dispatch(loadPosts(1, 10));
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