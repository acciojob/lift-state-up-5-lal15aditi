import React from "react";

function Child({ isLoggedIn, changeState }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    changeState();
  };
  return !isLoggedIn ? (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" required />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" required />
      <button>Login</button>
    </form>
  ) : (
    <p>You are logged in!</p>
  );
}

export default Child;
