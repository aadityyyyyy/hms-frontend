import { useState } from "react";
import api from "../api/axios";

export default function BookAppointment() {
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const book = async () => {
    await api.post("/api/appointments", {
      doctorId,
      appointmentDate: date,
      notes,
    });
    alert("Appointment booked");
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <input placeholder="Doctor ID"
             onChange={e => setDoctorId(e.target.value)} />
      <input type="datetime-local"
             onChange={e => setDate(e.target.value)} />
      <input placeholder="Notes"
             onChange={e => setNotes(e.target.value)} />
      <button onClick={book}>Book</button>
    </div>
  );
}
