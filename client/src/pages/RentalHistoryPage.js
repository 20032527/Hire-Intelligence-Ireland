import { useEffect, useState } from "react";
import axios from "../api/axios";
import "../styles/RentalHistoryPage.css";
import { useAuth } from "../context/AuthContext";  

export default function RentalHistoryPage() {
  const [rentals, setRentals] = useState([]);
  const { user } = useAuth();  

  const fetchRentals = async () => {
    try {

      // Fetches rental history from backend
  // Ref: https://axios-http.com/docs/example
      const res = await axios.get("/rentals/my");
      setRentals(res.data);
    } catch (err) {
      console.error("Failed to fetch rentals", err);
    }
  };

  // Loads rentals when page opens
  // Ref: https://react.dev/reference/react/useEffect

  useEffect(() => {
    fetchRentals();
  }, []);

  return (
    <div className="page-container">
      <h2>Rental History</h2>

      <div className="history-list">
        {rentals.map((r) => (
          <div className="history-card" key={r._id}>
            <h3>{r.gadget?.name}</h3>
            <p>Qty: {r.qty}</p>
            <p>From: {r.startDate?.slice(0, 10)}</p>
            <p>To: {r.endDate?.slice(0, 10)}</p>
            <p>Price: {r.totalPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
