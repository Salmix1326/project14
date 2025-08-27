import { useNavigate, useParams } from "react-router";
import {
  useGetPatientByIdQuery,
  useUpdatePatientMutation,
  useCreatePatientMutation,
} from "@/api";
import { patientInputFields, emptyPatientData } from "./settings";
import { useEffect, useState } from "react";
import { frontRoutes } from "@/router/frontRoutes";

function PatientForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: patientData, isLoading } = useGetPatientByIdQuery(id, {
    skip: !id,
  });
  const [updatePatient, { isLoading: saving }] = useUpdatePatientMutation();
  const [createPatient, { isLoading: creating }] = useCreatePatientMutation();

  const [formData, setFormData] = useState(() => emptyPatientData);

  useEffect(() => {
    if (patientData) setFormData(patientData);
  }, [patientData]);

  const saveButtonTitle = id ? "Save" : "Create";

  const handleInput = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const onSave = async (e) => {
    e.preventDefault();
    if (id) await updatePatient(formData);
    else await createPatient(formData);
    navigate(frontRoutes.navigate.patients.list);
  };

  return (
    <div className="max-w-2xl mx-auto bg-blue-50 text-blue-900 p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 border-b border-blue-200 pb-2">
        {id ? "Edit Patient" : "Create Patient"}
      </h2>

      {isLoading && (
        <div className="text-blue-500 animate-pulse py-4">Loading ...</div>
      )}

      {!isLoading && (
        <form onSubmit={onSave} className="space-y-4">
          {patientInputFields.map((field, index) => (
            <div key={index}>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium mb-1"
              >
                {field.label}
              </label>
              <input
                {...field}
                id={field.name}
                value={formData[field.name]}
                onChange={handleInput}
                className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
              />
            </div>
          ))}

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer transition-colors focus:ring-2 focus:ring-blue-300"
            disabled={saving || creating}
          >
            {saving || creating ? "Saving..." : saveButtonTitle}
          </button>
        </form>
      )}
    </div>
  );
}

export default PatientForm;

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
