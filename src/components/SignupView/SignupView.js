import React from 'react';

export default function SignupView() {
  return (
    <div>
      <h1>Page for register users</h1>
      <form action="">
        <lable>
          Name
          <input type="text" name="name" />
        </lable>
        <lable>
          Email
          <input type="email" name="email" />
        </lable>
        <lable>
          Password
          <input type="password" name="password" />
        </lable>
      </form>
      <button type="submit">
        <strong>Sign in</strong>
      </button>
    </div>
  );
}
