import { actions } from "../../redux/user";

const attemptSubmit = (props) => {
  const { type, email, password, name, dispatch } = props;

  if (type && type === 1) {
    dispatch(
      actions.trySignIn({
        email,
        password,
      })
    );
  } else if (type && type === 2) {
    dispatch(
      actions.trySignUp({
        email,
        password,
        name,
      })
    );
  }
};

export { attemptSubmit };
