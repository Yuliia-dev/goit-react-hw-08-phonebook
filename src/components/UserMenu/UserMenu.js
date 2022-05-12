import React from 'react';

const styles = {
  container: {
    display: 'grid',
    gap: '20px',
  },
};
export default function UserMenu() {
  return (
    <div style={styles.container}>
      <img src="../../../public/avatar.png" alt="avatar" />
      <p>email costumers</p>
      <button type="submit">Logout</button>
    </div>
  );
}
