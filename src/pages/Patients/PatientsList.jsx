import { useGetPatientsQuery } from "@/api";
import PatientItem from "./PatientItem";
import { frontRoutes } from "@/router/frontRoutes";
import { Link } from "react-router";

function PatientsList() {
  const { data: patientsList, isLoading } = useGetPatientsQuery();

  return (
    <div className="bg-blue-50 text-blue-900 p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 border-b border-blue-200 pb-3">
        Список пацієнтів
      </h1>

      {isLoading && (
        <div className="text-blue-500 animate-pulse py-4">Завантаження...</div>
      )}

      <div className="mb-4">
        <Link
          to={frontRoutes.navigate.patients.create}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Додати нового пацієнта
        </Link>
      </div>

      <div className="space-y-4">
        {patientsList?.map((patientData) => (
          <PatientItem key={patientData.id} patientData={patientData} />
        ))}
      </div>
    </div>
  );
}

export default PatientsList;
