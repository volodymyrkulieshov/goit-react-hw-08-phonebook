import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/auth/authThunks';
import Layout from './Layout/Layout';
import { selectIsRefreshing } from '../redux/auth/authSelectors';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RestrictedRoute = lazy(() => import('./RestrictedRoute'));
const PrivateRoute = lazy(() => import('./PrivateRoute'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    '...Loading'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;

// -----------------------------------------------------
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { getAllContactsThunk } from '../redux/contacts/contactsThunks';
// // import { selectIsLoading } from '../redux/selectors';
// import css from './App.module.css';

// const App = () => {
//   const dispatch = useDispatch();
//   // const isLoading = useSelector(selectIsLoading);

//   useEffect(() => {
//     dispatch(getAllContactsThunk());
//   }, [dispatch]);

//   return (
//     <>
//       <div className={css.container}>
//         <h1 className={css.title}>Phonebook</h1>
//         <ContactForm />
//         <h2 className={css.subTitle}>Contacts</h2>
//         <Filter />
//         <ContactList />
//         {/* {isLoading} */}
//       </div>
//     </>
//   );
// };

// export default App;
