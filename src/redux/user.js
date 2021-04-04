import Notify from "../Notify";
import axios from "axios";
import ENDPOINT from "../ENDPOINT";

const TRY_SIGN_IN = "redux/users/TRY_SIGN_IN";
const SET_USER = "redux/users/SET_USER";
const SIGN_OUT = "redux/users/SIGN_OUT";

const SHOW_NAV = "redux/users/SHOW_NAV";
const HIDE_NAV = "redux/users/HIDE_NAV";
const SHRINK_NAV = "redux/users/SHRINK_NAV";
const LARGE_NAV = "redux/users/LARGE_NAV";

const initialState = {
  username: "",
  showSide: true,
  forceSide: true,
  loading: false,
};

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case TRY_SIGN_IN: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_USER: {
      return {
        ...state,
        email: action.payload.email ? action.payload.email : "Error",
        loading: false,
      };
    }
    case SIGN_OUT: {
      return initialState;
    }

    case SHOW_NAV: {
      return {
        ...state,
        showSide: true,
      };
    }
    case HIDE_NAV: {
      return {
        ...state,
        showSide: false,
      };
    }
    case SHRINK_NAV: {
      return {
        ...state,
        forceSide: false,
      };
    }
    case LARGE_NAV: {
      return {
        ...state,
        forceSide: true,
      };
    }
    default:
      return state;
  }
};

export default currentUser;

const setUser = (userObj) => ({
  type: SET_USER,
  payload: userObj,
});

// eslint-disable-next-line no-unused-vars
const trySignIn = ({ email, password }) => (dispatch) => {
  const sendLogin = async () => {
    let query = await axios({
      method: "POST",
      url: `${ENDPOINT}/account/login`,
      data: {
        email,
        password,
      },
    });

    let response = await query.data;
    if (response) {
      if (response.success) {
        Notify("Welcome, " + email);
        dispatch({
          type: TRY_SIGN_IN,
        });
        dispatch(
          setUser({
            email,
          })
        );
      } else Notify("Something went wrong");
    }
    console.log(response);
  };

  sendLogin();
};

const signOut = () => ({
  type: SIGN_OUT,
});

const showNav = () => ({
  type: SHOW_NAV,
});

const hideNav = () => ({
  type: HIDE_NAV,
});

const largeNav = () => ({
  type: LARGE_NAV,
});

const shrinkNav = () => ({
  type: SHRINK_NAV,
});

export const actions = {
  trySignIn,
  signOut,
  showNav,
  hideNav,
  largeNav,
  shrinkNav,
};
