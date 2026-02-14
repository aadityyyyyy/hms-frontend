import { useEffect, useState } from "react";
import api from "../api/axios";

export default function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    api.get("/api/appointments/my")
       .then(res => setAppointments(res.data));
  }, []);

  return (
    <div>
      <h2>My Appointments</h2>
      {appointments.map(a => (
        <div key={a.id}>
          <p>Doctor: {a.doctor.name}</p>
          <p>Status: {a.status}</p>
        </div>
      ))}
    </div>
  );
}
