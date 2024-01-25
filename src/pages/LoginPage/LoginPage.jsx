import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authThunks';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input label="Email" name="email" type="email" />
        <input label="Password" name="password" type="password" />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
