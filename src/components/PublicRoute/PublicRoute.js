import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export default function PublicRoute({
  children,
  restricted = false,
  navigateTo = '/',
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return !shouldRedirect ? children : <Navigate to={navigateTo} />;
}
