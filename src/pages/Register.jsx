import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("PATIENT");

  const register = async () => {
    await api.post("/api/auth/register", {
      name,
      email,
      password,
      role,
    });

    alert("Registered successfully. Please login.");
    navigate("/login"); // 👈 go to login page
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <select onChange={e => setRole(e.target.value)}>
        <option value="PATIENT">Patient</option>
        <option value="DOCTOR">Doctor</option>
      </select>

      <button onClick={register}>Register</button>

      {/* 👇 Login link */}
      <p style={{ marginTop: "10px" }}>
        Already have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>
    </div>
  );
}
