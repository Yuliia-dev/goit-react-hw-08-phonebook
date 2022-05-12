import React from 'react';

export default function LoginView() {
  return (
    <div>
      <h1>Page for enter registered users</h1>
      <form action="">
        <lable>
          Email
          <input type="email" name="email" text="user@gmail.com" />
        </lable>
        <lable>
          Password
          <input type="password" name="password" />
        </lable>
      </form>
      <button type="submit">
        <strong>Log in</strong>
      </button>
    </div>
  );
}
