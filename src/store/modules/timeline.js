import { showMessage } from "./notification";
import agent from "../../services/agent.service";
import { push } from "connected-react-router";
import { MESSAGE_TYPE } from "../constant";
import { closeModal } from "./modal";
import { commentsLoaded } from "./comment";

// initial values
const timeline = {
  loadingPosts: "",
  posts: { data: {}, meta: {}, ids: [] },
  post: {},
  postsByUserId: [],
  postByPostId: {},
  totalPostCount: 0,
  PostCountByUser: 0,
  error: null,
  commentIds: {}
};

// Action types
const LOADING_POSTS = "LOADING_POSTS";
const LOAD_POSTS = "LOAD_POSTS";
const LOAD_POST_BY_POSTID = "LOAD_POST_BY_POSTID";
const LOAD_POSTS_BY_USERID = "LOAD_POSTS_BY_USERID";
const LOAD_TOTAL_POST_COUNT = "LOAD_TOTAL_POST_COUNT";
const LOAD_USER_POST_COUNT = "LOAD_USER_POST_COUNT";
const POSTS_EDITED = "POSTS_EDITED";
const CREATE_POST = "CREATE_POST";
const DELETE_POST = "DELETE_POST";
const DISLIKE_POST = "DISLIKE_POST";
const LOAD_COMMENT_IDS_BY_POSTID = "LOAD_COMMENT_IDS_BY_POSTID";
const LIKE_POST = "LIKE_POST";
const ERROR = "ERROR";
const ADD_COMMENT_ID = "ADD_COMMENT_ID";
const REMOVE_COMMENT_ID = "REMOVE_COMMENT_ID";

// Reducer
export default function reducer(state = timeline, action = {}) {
  switch (action.type) {
    case LOADING_POSTS:
      return {
        ...state,
        loadingPosts: action.payload,
        error: null
      };
    case LOAD_POSTS:
      const { data, meta } = action.payload
      const uniquePostIds = [];
      if (state?.loadingPosts === "loadMore") {
        const idArray = Array.from(new Set([
          ...state.posts.ids,
          ...data.map(({ id }) => id),
        ]));
        uniquePostIds.push(...idArray)
      }
      else {
        const idArray = Array.from(new Set([
          ...data.map(({ id }) => id),
        ]));
        uniquePostIds.push(...idArray)
      }
      const normalizedPosts = data.reduce((acc, post) => {
        acc[post.id] = post;
        return acc;
      }, {});

      return {
        ...state,
        posts: {
          ids: uniquePostIds,
          data: {
            ...state.posts.data,
            ...normalizedPosts
          },
          meta: {
            ...meta,
          },
        },
        loading: "",
        error: null,
      };
    case LOAD_POST_BY_POSTID:
      return {
        ...state,
        error: null,
        posts: {
          data: {
            [action.payload.id]: action.payload
          },
          meta: {},
          ids: [action.payload.id]
        }
      };
    case LOAD_COMMENT_IDS_BY_POSTID:
      const commentDataInPost = action.payload
      const postID = action.postId;

      //if routing from another page, remove all comments for post else save in idArray 
      let idArray = action.loadingType === (postID + "-loadingMoreComments") ? state.commentIds[postID] || [] : []

      const ids = Array.from(new Set([
        ...idArray,
        ...commentDataInPost.map(({ id }) => id)
      ]));
      return {
        ...state,
        loading: "",
        error: null,
        commentIds: {
          ...state.commentIds,
          [postID]: ids
        }
      };
    case LIKE_POST:
      const likedPostId = action.payload.id;
      const likedPost = {
        ...state.posts.data[likedPostId],
        likes: action.payload.likes,
        dislikes: action.payload.dislikes
      }
      return {
        ...state,
        error: null,
        posts: {
          ...state.posts,
          data: {
            ...state.posts.data,
            [likedPostId]: { ...likedPost }
          }
        },
      };

    case DISLIKE_POST:
      const dislikedPostId = action.payload.id;
      const dislikedPost = {
        ...state.posts.data[dislikedPostId],
        likes: action.payload.likes,
        dislikes: action.payload.dislikes
      }
      return {
        ...state,
        error: null,
        posts: {
          ...state.posts,
          data: {
            ...state.posts.data,
            [dislikedPostId]: { ...dislikedPost }
          },
        },
      };
    case LOAD_POSTS_BY_USERID:
      return {
        ...state,
        error: null,
        postsByUserId: action.payload,
      };
    case LOAD_TOTAL_POST_COUNT:
      return {
        ...state,
        error: null,
        totalPostCount: action.payload,
      };
    case LOAD_USER_POST_COUNT:
      return {
        ...state,
        error: null,
        PostCountByUser: action.payload,
      };
    case POSTS_EDITED:
      const updatedPost = Object.assign({}, state.posts.data[action.payload.id]);
      updatedPost.title = action.payload.title;
      updatedPost.body = action.payload.body;
      updatedPost.postImage = action.payload.postImage;
      return {
        ...state,
        error: null,
        posts: {
          ids: [...state.posts.ids],
          data: {
            ...state.posts.data,
            [action.payload.id]: updatedPost
          },
          meta: { ...state.posts.meta },
        },
      };
    case CREATE_POST:
      return {
        ...state,
        error: null,
        posts: {
          ids: [action.payload.id, ...state.posts.ids],
          data: { [action.payload.id]: action.payload, ...state.posts.data },
          meta: {
            ...state.posts.meta,
            itemCount: state.posts.meta.itemCount + 1,
            total: state.posts.meta.total + 1
          },
        }
      }
    case DELETE_POST:
      const deletedId = action.id;
      const updatedIdArray = [...state.posts.ids]
      updatedIdArray.splice(state.posts.ids.indexOf(deletedId), 1)
      return {
        ...state,
        error: null,
        posts: {
          ids: updatedIdArray,
          data: { ...state.posts.data },
          meta: {
            ...state.posts.meta,
            total: state.posts.meta.total - 1
          }
        }
      }
    case ADD_COMMENT_ID:
      const postIdToAddTo = action.postId;
      const commentIdToAdd = action.commentId;
      return {
        ...state,
        commentIds: {
          ...state.commentIds,
          [postIdToAddTo]: [
            commentIdToAdd,
            ...state.commentIds[postIdToAddTo] || []
          ]
        }
      };
    case REMOVE_COMMENT_ID:
      const postIdToRemoveFrom = action.postId;
      const commentIdToRemove = action.commentId;
      const indexOfCommentId = state.commentIds[postIdToRemoveFrom].indexOf(commentIdToRemove);
      const updatedCommentIds = [...state.commentIds[postIdToRemoveFrom]];
      updatedCommentIds.splice(indexOfCommentId, 1)
      return {
        ...state,
        commentIds: {
          ...state.commentIds,
          [postIdToRemoveFrom]:
            updatedCommentIds
        }
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
        posts: { data: [], meta: {}, ids: [] }
      }
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
export const postCreated = (data) => ({
  type: CREATE_POST,
  payload: data
});
export const postDeleted = (data) => ({
  type: DELETE_POST,
  id: data
});
export const postDisliked = (data) => ({
  type: DISLIKE_POST,
  payload: data
});
export const postLiked = (data) => ({
  type: LIKE_POST,
  payload: data
});
export const errorCode = (data) => ({
  type: ERROR,
  payload: data
});
export const loadCommentIdsByPostId = (id, data, loadingType) => ({
  type: LOAD_COMMENT_IDS_BY_POSTID,
  payload: data,
  postId: id,
  loadingType: loadingType
});
export const addCommentId = (postId, commentId) => ({
  type: ADD_COMMENT_ID,
  postId: postId,
  commentId: commentId
});
export const removeCommentId = (postId, commentId) => ({
  type: REMOVE_COMMENT_ID,
  postId: postId,
  commentId: commentId
});




// Actions
export function createPost(post) {
  return dispatch => {
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
        dispatch(postCreated(response));
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
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Load Posts",
            message: "Posts Loaded",
          })
        );

        //For when there are comments loaded in each post
        response.data.forEach(post => {
          dispatch(commentsLoaded(post.id, post.comments, post.commentCount));
          dispatch(loadCommentIdsByPostId(post.id, post.comments));
        })
        dispatch(postsLoaded(response));
        dispatch(loading(null));
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
        dispatch(commentsLoaded(id, response.comments, response.commentCount));
        dispatch(loadCommentIdsByPostId(id, response.comments.data));
        dispatch(loading(null));
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
        dispatch(loading(null));
        dispatch(errorCode(error.response));
      }
    );
  }
}

export function deletePost(id, deleteType) {
  return dispatch => {
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
          dispatch(push("/posts"));
        }
        else {
          dispatch(postDeleted(id));
        }
      },
      (error) => {
        // handle error
        if (error.response.statusCode === 404) {
          dispatch(postDeleted(id));
        }
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
        dispatch(postLiked(response));
      },
      (error) => {
        // handle error
        if (error.response.statusCode === 404) {
          dispatch(postDeleted(id));
        }
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
        dispatch(postDisliked(response));
      },
      (error) => {
        // handle error
        console.log(error.response.statusCode)
        if (error.response.statusCode === 404) {
          dispatch(postDeleted(id));
        }
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  }
}