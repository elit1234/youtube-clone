
const TRY_SIGN_IN = "redux/users/TRY_SIGN_IN";
const SET_USER = "redux/users/SET_USER";
const SIGN_OUT = "redux/users/SIGN_OUT";

const SHOW_NAV = "redux/users/SHOW_NAV";
const HIDE_NAV = "redux/users/HIDE_NAV";

const initialState = {
    username: '',
    showSide: true,
    loading: false
}

const currentUser = (state = initialState, action) => {
    switch(action.type) {
        case TRY_SIGN_IN: {
            return {
                ...state,
                loading: true
            }

        }
        case SET_USER: {
            return {
                ...state,
                username: action.payload.username ? action.payload.username : "Error",
                loading: false
            }
        }
        case SIGN_OUT: {
            return initialState;
        }

        case SHOW_NAV: {
            return {
                ...state,
                showSide: true
            }
        }
        case HIDE_NAV: {
            return {
                ...state,
                showSide: false
            }
        }
        default:
            return state;
    }
}

export default currentUser;


const setUser = (userObj) => {
    return {
        type: SET_USER,
        payload: userObj
    }
}

const trySignIn = ({ username, password}) => (dispatch) => {
    dispatch({
        type: TRY_SIGN_IN
    })
    dispatch(
        setUser({
            username: username
        })
    )
}

const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

const showNav = () => {
    return {
        type: SHOW_NAV
    }
}

const hideNav = () => {
    return {
        type: HIDE_NAV
    }
}

export const actions = {
    trySignIn,
    signOut,
    showNav,
    hideNav
}