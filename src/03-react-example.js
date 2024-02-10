import React from 'react';

function App() {
  return (
    <div>
      <form>
        <label htmlFor="username">
          Username
          <input id="username" type="text" placeholder="Username" />
        </label>
        <label htmlFor="password">
          Password
          <input id="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}