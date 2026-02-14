import { useEffect, useState } from "react";
import api from "../api/axios";

export default function DoctorAppointments() {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      const res = await api.get("/api/appointments/doctor");
      setAppointments(res.data);
    } catch (err) {
      alert("Failed to load appointments");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/api/appointments/${id}/status`, {
        status: status,
      });
      fetchAppointments();
    } catch (err) {
      alert("Action failed");
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Doctor Appointments</h2>

      {appointments.length === 0 && <p>No appointments</p>}

      {appointments.map((a) => (
        <div key={a.id} style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
          <p><b>Patient:</b> {a.patient.name}</p>
          <p><b>Date:</b> {a.appointmentDate}</p>
          <p><b>Status:</b> {a.status}</p>

          {a.status === "PENDING" && (
            <>
              <button onClick={() => updateStatus(a.id, "APPROVED")}>
                Approve
              </button>
              <button onClick={() => updateStatus(a.id, "REJECTED")}>
                Reject
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}