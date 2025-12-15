import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import GadgetForm from "./pages/GadgetForm";
import GadgetList from "./pages/GadgetList";
import RentalGadgetPage from "./pages/RentGadgetPage";
import RentalHistoryPage from "./pages/RentalHistoryPage";

/* Simple route protection based on login state */
/* Ref: https://reactrouter.com/en/main/start/overview */

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Login />;
};

export default function App() {
  return (

    /* Provides auth state to the whole app */
    /* Ref: https://react.dev/reference/react/createContext */
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
            <Route
            path="/gadgets/create"
            element={
              <ProtectedRoute>
                <GadgetForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/gadgets/list"
            element={
              <ProtectedRoute>
                <GadgetList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rentals/my"
            element={
              <ProtectedRoute>
                <RentalHistoryPage />
              </ProtectedRoute>
            }/>
          <Route
            path="/rentals/create"
            element={
              <ProtectedRoute>
                <RentalGadgetPage />
              </ProtectedRoute>
            }
          />

        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}
