import Notify from "../Notify";
import axios from "axios";
import ENDPOINT from "../ENDPOINT";

const SET_LOADING = "redux/users/SET_LOADING";
const STOP_LOADING = "redux/users/STOP_LOADING";
const SET_USER = "redux/users/SET_USER";
const SIGN_OUT = "redux/users/SIGN_OUT";

const SHOW_NAV = "redux/users/SHOW_NAV";
const HIDE_NAV = "redux/users/HIDE_NAV";
const SHRINK_NAV = "redux/users/SHRINK_NAV";
const LARGE_NAV = "redux/users/LARGE_NAV";

const initialState = {
  name: null,
  email: null,
  admin: 0,
  showSide: true,
  forceSide: true,
  loading: false,
  subscriptions: [
    {
      name: "Linus Tech Tips",
      to: "linustechtips",
    },
    {
      name: "Ben Awad",
      to: "benawad",
    },
  ],
};

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case STOP_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }
    case SET_USER: {
      return {
        ...state,
        email: action.payload.email ? action.payload.email : null,
        name: action.payload.name ? action.payload.name : null,
        admin: action.payload.admin ? action.payload.admin : 0,
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

const trySignUp = ({ email, name, password }) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
  const sendSignup = async () => {
    let query = await axios({
      method: "POST",
      url: `${ENDPOINT}/account/signup`,
      data: {
        email,
        name,
        password,
      },
    });
    let response = await query.data;
    if (response) {
      if (response.success) {
        Notify("You have successfully signed up. Please login");
      } else {
        Notify(response.message ? response.message : "Something went wrong");
      }
    } else Notify("Something went wrong");
    dispatch({
      type: STOP_LOADING,
    });
  };

  sendSignup();
};

// eslint-disable-next-line no-unused-vars
const trySignIn = ({ email, password }) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
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
        dispatch(
          setUser({
            email,
            name: response.data.name ? response.data.name : null,
            admin: response.data.admin ? response.data.admin : 0,
          })
        );
      } else Notify("Something went wrong");
    } else Notify("Something went wrong");
    dispatch({
      type: STOP_LOADING,
    });
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
  trySignUp,
};
