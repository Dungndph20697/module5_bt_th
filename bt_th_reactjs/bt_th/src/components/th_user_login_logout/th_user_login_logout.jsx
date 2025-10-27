import { useState } from "react";
import Home from "./Home";
export default function LoginLogout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = () => {
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {isLoggedIn ? (
        <Home onLogOut={handleLogOut} />
      ) : (
        <div>
          <h1>Please Log in</h1>
          <button onClick={handleLogIn}>Log in</button>
        </div>
      )}
    </div>
  );
}

