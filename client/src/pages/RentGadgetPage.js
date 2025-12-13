import { useState, useEffect } from "react";
import axios from "../api/axios";
import { useAuth } from "../context/AuthContext";  
import "../styles/RentGadgetPage.css";

export default function RentGadgetPage() {
  const { user } = useAuth();  
  const [gadgets, setGadgets] = useState([]);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    gadgetId: "",
    qty: 1,
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    axios.get("/gadgets/list").then((res) => setGadgets(res.data));
  }, []);

  const submit = async () => {
    try {
      await axios.post("/rentals/create", {
        user: user._id,
        ...form      
      });

      setMessage("Gadged Rented successfully!");

      setForm({ gadgetId: "", qty: 1, startDate: "", endDate: "" });
    } catch (err) {
      console.error("Rent failed", err);
    }
  };

  return (
    <div className="page-container">
      <h2>Rent a Gadget</h2>

      <div className="rent-box">

        <select
          value={form.gadgetId}
          onChange={(e) => setForm({ ...form, gadgetId: e.target.value })}
        >
          <option>Select Gadget</option>
          {gadgets.map((g) => (
            <option key={g._id} value={g._id}>
              {g.name} - ${g.pricePerDay}/day
            </option>
          ))}
        </select>

        <input
          type="number"
          value={form.qty}
          onChange={(e) => setForm({ ...form, qty: e.target.value })}
          placeholder="Quantity"
        />

        <input
          type="date"
          value={form.startDate}
          onChange={(e) => setForm({ ...form, startDate: e.target.value })}
        />

        <input
          type="date"
          value={form.endDate}
          onChange={(e) => setForm({ ...form, endDate: e.target.value })}
        />

        <button onClick={submit}>Rent</button>
      </div>
      {message && <p className="msg">{message}</p>}

    </div>
  );
}
