// Used for page navigation without reload
// Ref: https://reactrouter.com/en/main/components/link
import { Link } from "react-router-dom";

// Accesses logged-in user data
// Ref: https://react.dev/reference/react/useContext
import { useAuth } from "../context/AuthContext";
import { User } from "lucide-react";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      
      <div className="profile-icon-container">
          <User className="profile-icon" size={28} />        
      </div>

      <h2>Welcome, {user?.name}</h2>
      <p>Role: {user?.role}</p>

      
      {user?.role === "customer" && (
        <>
          <Link to="/rentals/my" className="dashboard-btn">View RentalHistory</Link>
          <Link to="/rentals/create" className="dashboard-btn">Rent a Gadget</Link>
        </>
      )}

      
      {user?.role === "admin" && (
        <>
          <Link to="/gadgets/create" className="dashboard-btn">Add Gadget</Link>
          <Link to="/gadgets/list" className="dashboard-btn">Manage Gadgets</Link>
        </>
      )}

      
      <button onClick={logout} className="logout-btn">Logout</button>
    </div>
  );
}
