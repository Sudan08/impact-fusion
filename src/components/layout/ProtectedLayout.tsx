import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../api/store';
import { selectAccessToken } from '../auth/authSlice';
import Login from '../../pages/LoginPage';

const ProtectedLayout = () => {
  const isAuthenticated : string = useAppSelector(selectAccessToken) ?? "";
  return isAuthenticated.length !== 0 ? <Outlet /> : <Login />;
};

export default ProtectedLayout;
