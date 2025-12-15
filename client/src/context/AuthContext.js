// Ref: https://react.dev/reference/react
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// Provides authentication state to child components
// Ref: https://react.dev/learn/passing-data-deeply-with-context
export const AuthProvider = ({ children }) => {
 const [user, setUser] = useState(null);

 // Saves user data and token after successful login
  // Ref: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

  const login = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user);
  };

  // Clears auth data and resets user state
  // Ref: https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (

    // Makes auth data available to the app
  // Ref: https://react.dev/reference/react/Context#provider
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
