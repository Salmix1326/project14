import { useGetAppointmentQuery } from "@/api";
import { frontRoutes } from "@/router/frontRoutes";
import { Link } from "react-router";
import AppointmentItem from "./AppointmentItem";

function AppointmentList() {
  const { data: appointmentsList, isLoading } = useGetAppointmentQuery();

  return (
    <div className="bg-blue-50 text-blue-900 p-6 min-h-screen w-full rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 border-b border-blue-200 pb-3">
        Список зустрічей
      </h1>

      <div className="mb-4">
        <Link
          to={frontRoutes.navigate.doctors.create}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Додати нову зустріч
        </Link>
      </div>

      {isLoading ? (
        <div className="text-blue-500 animate-pulse py-4">Завантаження...</div>
      ) : (
        <div className="space-y-4">
          {appointmentsList?.map((appointmentData) => (
            <AppointmentItem
              key={appointmentData.id}
              appointmentData={appointmentData}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AppointmentList;
