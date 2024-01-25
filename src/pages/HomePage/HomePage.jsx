import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserName,
} from '../../redux/auth/authSelectors';

const HomePage = () => {
  const userName = useSelector(selectUserName);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome {userName}</h1>
      ) : (
        <h3>Create or sign in an account</h3>
      )}
      <p>PhoneBook</p>
    </div>
  );
};

export default HomePage;
