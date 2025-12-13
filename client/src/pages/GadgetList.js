import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useAuth } from "../context/AuthContext";
import "../styles/GadgetList.css";

export default function GadgetList() {
  const [gadgets, setGadgets] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    pricePerDay: "",
    availableQty: "",
  });
  const [message, setMessage] = useState("");


  const { user } = useAuth();       
  const isAdmin = user?.role === "admin";  

  const fetchGadgets = async () => {
    try {
      const res = await axios.get("/gadgets/list");
      setGadgets(res.data);
    } catch (err) {
      console.error("Failed to fetch gadgets", err);
    }
  };

  useEffect(() => {
    fetchGadgets();
  }, []);

  
  const deleteGadget = async (id) => {
    try {
      await axios.delete(`/gadgets/delete/${id}`);
      setGadgets(gadgets.filter((g) => g._id !== id));
      setMessage("Gadget deleted successfully!");

    } catch (err) {
      console.error("Failed to delete gadget", err);
    }
  };

  
  const startEditing = (g) => {
    setEditingId(g._id);
    setEditForm({
      name: g.name,
      pricePerDay: g.pricePerDay,
      availableQty: g.availableQty,
    });
  };

  
  const saveEdit = async () => {
    try {
      await axios.put(`/gadgets/update/${editingId}`, editForm);
      setGadgets(
        gadgets.map((g) =>
          g._id === editingId ? { ...g, ...editForm } : g
        )
      );
      setMessage("Gadget updated successfully!");

      setEditingId(null);
    } catch (err) {
      console.error("Failed to update gadget", err);
    }
  };

  return (
    <div className="page-container">
      <h2>Gadget List</h2>

      
      {isAdmin ? (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price/Day</th>
              <th>Qty</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {gadgets.map((g) => (
              <tr key={g._id}>
                {editingId === g._id ? (
                  <>
                    <td>
                      <input
                        value={editForm.name}
                        onChange={(e) =>
                          setEditForm({ ...editForm, name: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <input
                        value={editForm.pricePerDay}
                        onChange={(e) =>
                          setEditForm({
                            ...editForm,
                            pricePerDay: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td>
                      <input
                        value={editForm.availableQty}
                        onChange={(e) =>
                          setEditForm({
                            ...editForm,
                            availableQty: e.target.value,
                          })
                        }
                      />
                    </td>

                    <td>
                      <button onClick={saveEdit}>Save</button>
                      <button onClick={() => setEditingId(null)}>
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{g.name}</td>
                    <td>${g.pricePerDay}</td>
                    <td>{g.availableQty}</td>
                    <td>
                      <button onClick={() => startEditing(g)}>Edit</button>
                      <button onClick={() => deleteGadget(g._id)}>
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        
        <div className="gadget-list">
          {gadgets.map((g) => (
            <div className="gadget-card" key={g._id}>
              <h3>{g.name}</h3>
              <p>Price per day: ${g.pricePerDay}</p>
              <p>Available: {g.availableQty}</p>
            </div>
          ))}
        </div>
      )}
            {message && <p className="msg">{message}</p>}

    </div>
  );
}
