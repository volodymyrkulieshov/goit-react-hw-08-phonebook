import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authThunks';

const UserMenu = () => {
  const userEmail = useSelector(state => state.user.user.email);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>Email: {userEmail}</p>
      <button onClick={onLogout} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
