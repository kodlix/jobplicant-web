import { showMessage } from "./notification";
import agent from "../../services/agent.service";
import { MESSAGE_TYPE } from "../constant";
import { loadCommentIdsByPostId, addCommentId, removeCommentId } from "./timeline";

// initial values
const comment = {
  comments: { data: {}, meta: {} },
  comment: {},
  loadingType: null
};

// Action types
const LOAD_COMMENT = "LOAD_COMMENT";
const COMMENT_LIKED = "COMMENT_LIKED";
const COMMENT_DISLIKED = "COMMENT_DISLIKED";
const LOADING_COMMENTS = "LOADING_COMMENTS";
const LOAD_COMMENTS_BY_POSTID = "LOAD_COMMENTS_BY_POSTID";
const COMMENT_CREATED = "COMMENT_CREATED";
const COMMENT_DELETED = "COMMENT_DELETED";

// Reducer
export default function reducer(state = comment, action = {}) {
  switch (action.type) {
    case LOAD_COMMENT:
      return {
        ...state,
        comment: action.payload
      };
    case LOADING_COMMENTS:
      return {
        ...state,
        loadingType: action.loadingType
      };

    case LOAD_COMMENTS_BY_POSTID:
      const commentMeta = {
        page: action.page,
        itemCount: action.payload.length,
        total: action.total
      }
      const postId = action.postId
      const normalizedComments = action.payload.reduce((acc, comment) => {
        acc[comment.id] = comment;
        return acc;
      }, {});
      return {
        ...state,
        comments: {
          data: {
            ...state.comments.data,
            ...normalizedComments
          },
          meta: {
            ...state.comments.meta,
            [postId]:
            {
              ...commentMeta,
            }
          }
        }
      };
    case COMMENT_LIKED:
      const commentToLikeId = action.payload.id
      return {
        ...state,
        comments: {
          ...state.comments,
          data: {
            ...state.comments.data,
            [commentToLikeId]: {
              ...state.comments.data[commentToLikeId],
              likes: action.payload.likes,
              dislikes: action.payload.dislikes
            }
          },
          meta: { ...state.comments.meta },
          ids: { ...state.comments.ids }
        }
      };
    case COMMENT_DISLIKED:
      const commentToDislikeId = action.payload.id
      return {
        ...state,
        comments: {
          ...state.comments,
          data: {
            ...state.comments.data,
            [commentToDislikeId]: {
              ...state.comments.data[commentToDislikeId],
              likes: action.payload.likes,
              dislikes: action.payload.dislikes
            }
          },
          meta: { ...state.comments.meta },
        }
      };
    case COMMENT_CREATED:
      const postIdToAddTo = action.postId
      const commentIdToAdd = action.payload.id
      return {
        ...state,
        comments: {
          ...state.comments,
          data: {
            ...state.comments.data,
            [commentIdToAdd]: action.payload
          },
          meta: {
            ...state.comments.meta,
            [postIdToAddTo]: {
              ...state.comments.meta[postIdToAddTo],
              total: state.comments.meta[postIdToAddTo].total + 1,
              itemCount: state.comments.meta[postIdToAddTo].itemCount + 1
            }
          }
        }
      };
    case COMMENT_DELETED:
      const postIdToRemoveFrom = action.postId
      return {
        ...state,
        comments: {
          ...state.comments,
          meta: {
            ...state.comments.meta,
            [postIdToRemoveFrom]: {
              ...state.comments.meta[postIdToRemoveFrom],
              total: state.comments.meta[postIdToRemoveFrom].total - 1,
              itemCount: state.comments.meta[postIdToRemoveFrom].itemCount - 1
            }
          }
        }
      };

    default:
      return state;
  }
}

//Action Creators

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
export const commentsLoaded = (id, data, total) => ({
  type: LOAD_COMMENTS_BY_POSTID,
  payload: data.data || data,
  postId: id,
  page: data?.meta?.page || 0,
  total: data?.meta?.total || total
});
export const addCreatedComment = (postId, data) => ({
  type: COMMENT_CREATED,
  postId: postId,
  payload: data
});
export const removeDeletedComment = (id, postId) => ({
  type: COMMENT_DELETED,
  postId: postId,
  id: id
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
        dispatch(addCreatedComment(id, response));
        dispatch(addCommentId(id, response.id));
        dispatch(loadingComment(null));
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
        dispatch(loadCommentIdsByPostId(id, response.data, loadingType));
        dispatch(loadingComment(null));
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
        if (error.response.status === 404) {
          dispatch(removeCommentId(postId, id));
          dispatch(removeDeletedComment(id, postId));
        }
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
        if (error.response.status === 404) {
          dispatch(removeCommentId(postId, id));
          dispatch(removeDeletedComment(id, postId));
        }
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
        dispatch(removeCommentId(postId, id));
        dispatch(removeDeletedComment(id, postId));
      },
      (error) => {
        // handle error
        if (error.response.status === 404) {
          dispatch(removeCommentId(postId, id));
          dispatch(removeDeletedComment(id, postId));
        }
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  }
}