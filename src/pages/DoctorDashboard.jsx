import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function DoctorDashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Doctor Dashboard</h2>

      <p>Welcome Dr. {user?.name}</p>

      <button onClick={() => navigate("/doctor/appointments")}>
        View Appointments
      </button>

      <button onClick={() => {
        logout();
        navigate("/login");
      }}>
        Logout
      </button>
    </div>
  );
}
