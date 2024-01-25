import { NavLink } from 'react-router-dom';
const AuthBar = () => {
  return (
    <>
      <li>
        <NavLink to="/register">
          <p>Sign in</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/login">
          <p>Log in</p>
        </NavLink>
      </li>
    </>
  );
};

export default AuthBar;
