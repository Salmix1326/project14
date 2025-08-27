import { useDeleteDoctorMutation } from "@/api";
import { frontRoutes } from "@/router/frontRoutes";
import { Link } from "react-router";

function DoctorItem({ doctorData }) {
  const [deleteDoctor, { isLoading }] = useDeleteDoctorMutation();

  const onDelete = () => {
    deleteDoctor(doctorData.id);
  };

  return (
    <div className="flex flex-wrap justify-between items-center bg-white text-blue-900 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
      <div className="flex-1 min-w-[150px] font-semibold">
        {doctorData.fullName}
      </div>
      <div className="flex-1 min-w-[120px]">{doctorData.specialty}</div>
      <div className="flex-1 min-w-[150px]">{doctorData.email}</div>
      <div className="flex-1 min-w-[120px]">{doctorData.phone}</div>
      <div className="flex-1 min-w-[100px]">{doctorData.room}</div>

      <div className="flex gap-2 mt-2 sm:mt-0">
        <Link
          to={frontRoutes.navigate.doctors.edit(doctorData.id)}
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

export default DoctorItem;

//   {
//     "id": "d001",
//     "fullName": "Олена Ковальчук",
//     "specialty": "Терапевт",
//     "email": "olena.kov@example.com",
//     "phone": "+380501112233",
//     "room": "101",
//     "notes": "Працює з 09:00 до 15:00"
//   },
