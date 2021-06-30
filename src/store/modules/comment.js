import { showMessage } from "./notification";
import agent from "../../services/agent.service";
import { MESSAGE_TYPE } from "../constant";
import { loadPosts } from "./timeline";

// initial values
const comment = {
  comments: [],
  comment: {},
};

// Action types
const LOAD_COMMENT = "LOAD_COMMENT";
const LOAD_COMMENTS_BY_POSTID = "LOAD_COMMENTS_BY_POSTID";

// Reducer
export default function reducer(state = comment, action = {}) {
  switch (action.type) {
    case LOAD_COMMENT:
      return {
        ...state,
        comment: action.payload,
      };
    case LOAD_COMMENTS_BY_POSTID:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
}

//Action Creators
export const commentsLoaded = (data) => ({
  type: LOAD_COMMENTS_BY_POSTID,
  payload: data,
});

// Actions
export function postComment(id, comment) {
  return dispatch => {
    // dispatch(isLoading());
    return agent.Comment.save(id, comment).then(
      response => {
        //handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Post Comment",
            message: "Comment posted successfully",
          })
        );
        dispatch(loadPosts(1, 10));
      },
      (error) => {
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  }
}

export function loadComments(id) {
  return dispatch => {
    return agent.Comment.save(id, comment).then(
      response => {
        dispatch(commentsLoaded(response));
      }
    )
  }
}

export function likeComment(id) {
  return dispatch => {
    return agent.Comment.like(id).then(
      response => {
        //handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Like Comment",
            message: "Comment liked!!",
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

export function dislikeComment(id) {
  return dispatch => {
    return agent.Comment.dislike(id).then(
      response => {
        //handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Dislike Comment",
            message: "Comment disliked!!",
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

export function deleteComment(id) {
  return dispatch => {
    // dispatch(isLoading());
    return agent.Comment.delete(id).then(
      response => {
        //handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Delete Comment",
            message: "Comment deleted successfully",
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