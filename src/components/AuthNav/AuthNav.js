import { NavLink } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    gap: '20px',
  },
  // link: {
  //   color: 'red',
  // },
};

export default function AuthNav() {
  return (
    <div style={styles.container}>
      <NavLink to="register">register </NavLink>
      <NavLink to="login">login </NavLink>
    </div>
  );
}
