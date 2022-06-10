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

export default function Navigation() {
  return (
    <nav style={styles.container}>
      <NavLink to="/">home </NavLink>
      <NavLink to="contacts">contacts </NavLink>
    </nav>
  );
}