import {
  useDeleteAppointmentMutation,
  useGetDoctorByIdQuery,
  useGetPatientByIdQuery,
} from "@/api";
import { frontRoutes } from "@/router/frontRoutes";
import { Link } from "react-router";

function AppointmentItem({ appointmentData }) {
  const [deleteAppointment, { isLoading }] = useDeleteAppointmentMutation();
  const { data: doctorData } = useGetDoctorByIdQuery(appointmentData.doctorId, {
    skip: !appointmentData.doctorId,
  });
  const { data: patientData } = useGetPatientByIdQuery(
    appointmentData.patientId,
    {
      skip: !appointmentData.patientId,
    }
  );

  console.log(doctorData);

  const onDelete = () => {
    deleteAppointment(appointmentData.id);
  };

  return (
    <div className="flex flex-wrap justify-between items-center bg-white text-blue-900 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
      <div className="flex-1 min-w-[150px]">
        Doctor: {doctorData ? doctorData.fullName : "Doctor Not found"}
      </div>
      <div className="flex-1 min-w-[150px]">
        Patient: {patientData ? patientData.fullName : "Patient Not found"}
      </div>
      <div className="flex-1 min-w-[120px]">
        {new Date(appointmentData.date).toLocaleString("uk-UA", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
      <div className="flex-1 min-w-[150px]">{appointmentData.reason}</div>
      <div className="flex-1 min-w-[120px]">{appointmentData.status}</div>

      <div className="flex gap-2 mt-2 sm:mt-0">
        <Link
          to={frontRoutes.navigate.appointments.edit(appointmentData.id)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors"
        >
          Edit
        </Link>
        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors cursor-pointer"
        >
          {isLoading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}

export default AppointmentItem;

//  {
//     "id": "a002",
//     "patientId": "p002",
//     "doctorId": "d003",
//     "date": "2025-07-29T11:37",
//     "reason": "Висип на шкірі",
//     "status": "active"
//   },
