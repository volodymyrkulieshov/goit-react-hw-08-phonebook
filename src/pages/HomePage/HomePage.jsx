import { useSelector } from 'react-redux';

const HomePage = () => {
  const userName = useSelector(state => state.user.user.name);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome {userName}</h1>
      ) : (
        <h3>Create or sign in an account</h3>
      )}
      <p>
        Super cool application for creating and storing contacts. It won't be
        better.
      </p>
    </div>
  );
};

export default HomePage;
