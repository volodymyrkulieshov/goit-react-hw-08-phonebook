import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import AuthBar from 'components/AuthBar/AuthBar';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <>
      <header>
        <div>
          <ul>
            <li>
              <Link to="/">
                <p>Home</p>
              </Link>
            </li>
          </ul>
          {isLoggedIn && (
            <Link to="contacts">
              <p>Contacts</p>
            </Link>
          )}

          {isLoggedIn ? <UserMenu /> : <AuthBar />}
        </div>
      </header>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;