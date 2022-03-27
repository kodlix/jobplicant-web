import agent from "../../services/agent.service";
import { showMessage } from "./notification";

const dashboard = {
    count: [],
    allPost: 0,
    userPost: {},
}

// Action types
const COUNT = "COUNT";
const POST = "POST";
const USER_POST_COUNT = "USER_POST_COUNT";

// Reducer
export default function reducer(state = dashboard, action = {}) {
    switch (action.type) {
        case COUNT:
            return {
                ...state,
                count: action.payload,
            };
        case POST:
            return {
                ...state,
                allPost: action.payload,
            }
        case USER_POST_COUNT:
            return {
                ...state,
                userPost: action.payload,
            }
        default:
            return state;
    }
}

// Action Creators
export function userCountByGroup(data) {
    return { type: COUNT, payload: data };
}

export function getAllPosts(data) {
    return { type: POST, payload: data };
}

export function getUserPosts(data) {
    return { type: USER_POST_COUNT, payload: data };
}

//Action
//Admin
export const UserAdminCount = () => (dispatch) => {
    return agent.Dashboard.getCountByGroup().then(
        (response) => {
            dispatch(userCountByGroup(response));
            console.log("DASH", response);
        },
        (error) => {
            dispatch(showMessage({ type: "error", message: error }));
        }
    );
};

export const AdminPostCount = () => (dispatch) => {
    return agent.Dashboard.getAllPostCount().then(
        (response) => {
            console.log("allpost", response);
            dispatch(getAllPosts(response));
        },
        (error) => {
            dispatch(showMessage({ type: "error", message: error }));
        }
    );
};


// user
export const UserPostCount = (userId) => async (dispatch) => {
    return agent.Dashboard.getUserPostCount(userId).then(
        (response) => {
            console.log("userpost", response);
            dispatch(getUserPosts(response));
        },
        (error) => {
            dispatch(showMessage({ type: "error", message: error }));
        }
    );
};

// export function getUserCount(userId) {
//     return (dispatch) => {
//         return agent.Dashboard.getAllPostCount(userId).then(
//             (res) => {
//                 dispatch(getUserCount(res))
//             },
//             (error) => {
//                 dispatch(showMessage({ type: "error", message: error }))
//             }

//         )
//     }
// }

