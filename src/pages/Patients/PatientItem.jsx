import { useDeletePatientMutation } from "@/api";
import { frontRoutes } from "@/router/frontRoutes";
import { Link } from "react-router";

function PatientItem({ patientData }) {
  const [deletePatient, { isLoading }] = useDeletePatientMutation();

  const onDelete = () => {
    deletePatient(patientData.id);
  };

  return (
    <div className="flex flex-wrap justify-between items-center bg-white text-blue-900 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
      <div className="flex-1 min-w-[150px]">{patientData.fullName}</div>
      <div className="flex-1 min-w-[120px]">{patientData.phone}</div>
      <div className="flex-1 min-w-[150px]">{patientData.email}</div>
      <div className="flex-1 min-w-[200px]">{patientData.notes}</div>

      <div className="flex gap-2 mt-2 sm:mt-0">
        <Link
          to={frontRoutes.navigate.patients.edit(patientData.id)}
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

export default PatientItem;

//   {
//     "id": "p001",
//     "fullName": "Іван Петренко11",
//     "birthDate": "1985-03-15",
//     "gender": "male",
//     "phone": "+380501234567",
//     "email": "ivan@example.com",
//     "address": "м. Київ, вул. Шевченка, 12",
//     "notes": "Алергія на пеніцилін"
//   },
