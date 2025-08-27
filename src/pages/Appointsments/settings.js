export const appointmentInputFields = [
  {
    name: "doctor",
    type: "text",
    placeholder: "doctor' name",
  },
  {
    name: "patient",
    type: "text",
    placeholder: "patient' name",
  },
  {
    name: "date",
    type: "datetime-local",
    placeholder: "appointment's date",
  },
  {
    name: "reason",
    type: "text",
    placeholder: "appointment's reason",
  },
  {
    name: "status",
    type: "tel",
    placeholder: "appointment's status",
  },
];

export const emptyAppointmentData = {
  doctor: "",
  patient: "",
  date: "",
  reason: "",
  status: "",
};

// {
//     "id": "a002",
//     "patientId": "p002",
//     "doctorId": "d003",
//     "date": "2025-07-29T11:37",
//     "reason": "Висип на шкірі",
//     "status": "active"
//   },
