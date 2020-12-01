const initialState = {
    user: {}
}

const GET_USER = "GET_USER"
const CLEAR_USER = "CLEAR_USER"

export function getUser(user) {
    return {
        type: GET_USER,
        payload: user
    }
}

export function clearUser() {
    return {
        type: CLEAR_USER,
        payload: {}
    }
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return { ...state, user: action.payload };
        case CLEAR_USER:
            return { ...state, user: action.payload }
        default:
            return state
    }
}