import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operation';
import avatar from './avatar.png';

// const styles = {
//   container: {
//     display: 'grid',
//     gap: '20px',
//   },
// };
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  return (
    <div>
      <img src={avatar} width="34" alt="avatar" />
      <p>Welcome, {name}</p>
      <button type="submit" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}
