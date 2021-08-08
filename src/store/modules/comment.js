import { showMessage } from "./notification";
import agent from "../../services/agent.service";
import { MESSAGE_TYPE } from "../constant";
import { loadPosts } from "./timeline";

// initial values
const comment = {
  comments: {},
  comment: {},
  loadingType: null
};

// Action types
const LOAD_COMMENT = "LOAD_COMMENT";
const COMMENT_LIKED = "COMMENT_LIKED";
const COMMENT_DISLIKED = "COMMENT_DISLIKED";
const LOADING_COMMENTS = "LOADING_COMMENTS";
const LOAD_COMMENTS_BY_POSTID = "LOAD_COMMENTS_BY_POSTID";

// Reducer
export default function reducer(state = comment, action = {}) {
  switch (action.type) {
    case LOAD_COMMENT:
      return {
        ...state,
        comment: action.payload
      };
    case LOAD_COMMENTS_BY_POSTID:
      return {
        ...state,
        loadingType: null,
        comments: { ...state.comments, [action.postId]: action.payload }
      };
    case LOADING_COMMENTS:
      return {
        ...state,
        loadingType: action.loadingType
      };
    case COMMENT_LIKED:
      let commentsArrayForLike = [];
      if (Object.keys(state.comments).length > 0) {
        commentsArrayForLike = state.comments[action.postId].map(function (item) {
          if (item.id === action.payload.id) {
            return { ...item, likes: action.payload.likes }
          }
          return item;
        })
      }
      return {
        ...state,
        comments: { ...state.comments, [action.postId]: commentsArrayForLike }
      };
    case COMMENT_DISLIKED:
      let commentsArrayForDislike = [];
      if (Object.keys(state.comments).length > 0) {
        commentsArrayForDislike = state.comments[action.postId].map(function (item) {
          if (item.id === action.payload.id) {
            return { ...item, dislikes: action.payload.dislikes }
          }
          return item;
        })
      }
      return {
        ...state,
        comments: { ...state.comments, [action.postId]: commentsArrayForDislike }
      };

    default:
      return state;
  }
}

//Action Creators
export const commentsLoaded = (id, data) => ({
  type: LOAD_COMMENTS_BY_POSTID,
  payload: data,
  postId: id
});
export const loadingComment = (loadingType) => ({
  type: LOADING_COMMENTS,
  loadingType: loadingType
});
export const commentLiked = (postId, data) => ({
  type: COMMENT_LIKED,
  payload: data,
  postId
});
export const commentDisliked = (id, data) => ({
  type: COMMENT_DISLIKED,
  payload: data,
  postId: id
});



// Actions
export function postComment(id, comment, loadingType) {
  return dispatch => {
    dispatch(loadingComment(loadingType));
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
        dispatch(loadingComment("createCommentSuccess"));
        dispatch(loadingComment(null));
        dispatch(loadComments(id, 1, 10, "-loadingComments"));
      },
      (error) => {
        dispatch(loadingComment(null));
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  }
}

export function loadComments(id, page, take, loadingType) {
  return dispatch => {
    dispatch(loadingComment(loadingType));
    return agent.Comment.load(id, page, take).then(
      response => {
        dispatch(commentsLoaded(id, response));
      },
      (error) => {
        dispatch(showMessage({ type: "error", message: error }));
        dispatch(loadingComment(null));
      }
    )
  }
}

export function likeComment(id, postId) {
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
        dispatch(commentLiked(postId, response));
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  }
}

export function dislikeComment(id, postId) {
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
        dispatch(commentDisliked(postId, response));
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  }
}

export function deleteComment(id, postId) {
  return dispatch => {
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
        dispatch(loadComments(postId, 1, 10, "-loadingComments"));
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  }
}