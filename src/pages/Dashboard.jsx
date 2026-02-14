import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <p>Role: {user?.role}</p>

      <button onClick={() => navigate("/book")}>
        Book Appointment
      </button>

      <button onClick={() => navigate("/my")}>
        My Appointments
      </button>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
