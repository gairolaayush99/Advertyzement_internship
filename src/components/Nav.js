import React from "react";


export default function Nav({ changestate }) {
  return (
    <header className="Header">
      <div className="logo">
        <h1>Advertyzement</h1>
      </div>
      <ul>
        <li>Home</li>
        <li onClick={changestate}>Get Users</li>
      </ul>
    </header>
  );
}
