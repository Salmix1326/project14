import { useNavigate, useParams } from "react-router";
import {
  useGetAppointmentByIdQuery,
  useUpdateAppointmentMutation,
  useCreateAppointmentMutation,
  useGetDoctorByIdQuery,
  useGetPatientByIdQuery,
} from "@/api";
import { appointmentInputFields, emptyAppointmentData } from "./settings";
import { useEffect, useState } from "react";
import { frontRoutes } from "@/router/frontRoutes";

function AppointmentForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: appointmentData, isLoading } = useGetAppointmentByIdQuery(id, {
    skip: !id,
  });

  const { data: doctorData } = useGetDoctorByIdQuery(
    appointmentData?.doctorId,
    {
      skip: !appointmentData?.doctorId,
    }
  );

  const { data: patientData } = useGetPatientByIdQuery(
    appointmentData?.patientId,
    {
      skip: !appointmentData?.patientId,
    }
  );
  const [updateAppointment, { isLoading: saving }] =
    useUpdateAppointmentMutation();
  const [createAppointment, { isLoading: creating }] =
    useCreateAppointmentMutation();

  const [formData, setFormData] = useState(() => ({
    ...emptyAppointmentData,
    doctor: doctorData?.fullName || "",
    patient: patientData?.fullName || "",
  }));

  useEffect(() => {
    if (appointmentData) {
      setFormData({
        doctor: doctorData?.fullName || "",
        patient: patientData?.fullName || "",
        date: appointmentData.date || "",
        reason: appointmentData.reason || "",
        status: appointmentData.status || "",
      });
    }
  }, [appointmentData, doctorData, patientData]);

  const saveButtonTitle = id ? "Save" : "Create";

  const handleInput = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const onSave = async (e) => {
    e.preventDefault();
    if (id) await updateAppointment(formData);
    else await createAppointment(formData);
    navigate(frontRoutes.navigate.appointments.list);
  };

  return (
    <div className="max-w-2xl mx-auto bg-blue-50 text-blue-900 p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 border-b border-blue-200 pb-2">
        {id ? "Edit Appointment" : "Create Appointment"}
      </h2>

      {isLoading && (
        <div className="text-blue-500 animate-pulse py-4">Loading ...</div>
      )}

      {!isLoading && (
        <form onSubmit={onSave} className="space-y-4">
          {appointmentInputFields.map((field, index) => (
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
                value={
                  field.name === "date" && formData.date
                    ? new Date(formData.date).toISOString().slice(0, 16)
                    : formData[field.name]
                }
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

export default AppointmentForm;
