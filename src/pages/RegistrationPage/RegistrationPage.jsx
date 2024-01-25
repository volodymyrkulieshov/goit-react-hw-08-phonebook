import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authThunks';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleRegister = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <>
      <div
        style={{
          marginTop: 40,
          marginLeft: 'auto',
          marginRight: 'auto',
          width: 450,
        }}
      >
        <form onSubmit={handleRegister}>
          <input label="Username" variant="outlined" type="text" name="name" />
          <input label="Email" type="email" name="email" />
          <input label="Password" type="password" name="password" />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default RegistrationPage;
