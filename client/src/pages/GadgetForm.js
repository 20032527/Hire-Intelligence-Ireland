import { useState } from "react";
import axios from "../api/axios";
import "../styles/GadgetForm.css";

export default function GadgetForm() {

  // Holds gadget form input values
  // Ref: https://react.dev/learn/state-a-components-memory
  const [form, setForm] = useState({
    name: "",
    pricePerDay: "",
    availableQty: "",
  });
  const [message, setMessage] = useState("");


  const submit = async (e) => {
    e.preventDefault();// prevents page refresh
    // Ref: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    try {

      // Sends form data to backend API
      // Ref: https://axios-http.com/docs/post_example
      await axios.post("/gadgets/create", form);
      setMessage("Gadget added successfully!");
      setForm({ name: "", pricePerDay: "", availableQty: "" });
    } catch (err) {
      console.error("Error adding gadget", err);
    }
  };

  return (
    <div className="page-container">
      <h2>Add Gadget</h2>

      {/* Form for adding new gadget */}
      {/* Ref: https://react.dev/learn/sharing-state-between-components */}

      <form className="gadget-form" onSubmit={submit}>
        <input
          type="text"
          placeholder="Gadget Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}

          // Ref: https://react.dev/learn/updating-objects-in-state
        />

        <input
          type="number"
          placeholder="Price Per Day"
          value={form.pricePerDay}
          onChange={(e) => setForm({ ...form, pricePerDay: e.target.value })}
        />

        <input
          type="number"
          placeholder="Available Quantity"
          value={form.availableQty}
          onChange={(e) => setForm({ ...form, availableQty: e.target.value })}
        />

        <button type="submit">Add Gadget</button>

      </form>
      {message && <p className="msg">{message}</p>}
    </div>
  );
}
