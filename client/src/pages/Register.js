import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
    phone: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    await axios.post("/auth/register", form);
    navigate("/");
    }catch(error) {
      if (error.response) {
        if (error.response.status === 400) {
          alert("Email already in use");
        }  else if (error.response.status === 500) {
          alert("Server error. Please try again later.");
        } else {
          alert(error.response.data.message || "Something went wrong.");
        }
      } else if (error.request) {
        alert("Network error. Please check your internet connection.");
      } else {
        alert("An unexpected error occurred.");
      }
  
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <select name="role" onChange={handleChange}>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
