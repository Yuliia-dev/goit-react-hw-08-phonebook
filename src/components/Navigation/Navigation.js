import { Link } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    gap: '20px',
  },
};

export default function Navigation() {
  return (
    <nav style={styles.container}>
      <Link to="/">home </Link>
      <Link to="register">register </Link>
      <Link to="login">login </Link>
      <Link to="contacts">contacts </Link>
    </nav>
  );
}
