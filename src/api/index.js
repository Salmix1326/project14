import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiRoutes } from "./apiRoutes";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Patients"],
  endpoints: (builder) => ({
    getPatients: builder.query({
      query: () => apiRoutes.patients.getAll,
      providesTags: ["Patients"],
    }),
    getPatientById: builder.query({
      query: (id) => apiRoutes.patients.getById(id),
      providesTags: (result, error, id) => [{ type: "Patients", id }],
    }),
    createPatient: builder.mutation({
      query: (data) => ({
        url: apiRoutes.patients.create,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Patients"],
    }),
    updatePatient: builder.mutation({
      query: ({ id, ...data }) => ({
        url: apiRoutes.patients.update(id),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, id) => [
        "Patients",
        { type: "Patients", id },
      ],
    }),
    deletePatient: builder.mutation({
      query: (id) => ({
        url: apiRoutes.patients.delete(id),
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        "Patients",
        { type: "Patients", id },
      ],
    }),
  }),
});

export const apiDoctors = createApi({
  reducerPath: "apiDoctors",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Doctors"],
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: () => apiRoutes.doctors.getAll,
      providesTags: ["Doctors"],
    }),
    getDoctorById: builder.query({
      query: (id) => apiRoutes.doctors.getById(id),
      providesTags: (result, error, id) => [{ type: "Doctors", id }],
    }),
    createDoctor: builder.mutation({
      query: (data) => ({
        url: apiRoutes.doctors.create,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Doctors"],
    }),
    updateDoctor: builder.mutation({
      query: ({ id, ...data }) => ({
        url: apiRoutes.doctors.update(id),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, id) => [
        "Doctors",
        { type: "Doctors", id },
      ],
    }),
    deleteDoctor: builder.mutation({
      query: (id) => ({
        url: apiRoutes.doctors.delete(id),
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        "Doctors",
        { type: "Doctors", id },
      ],
    }),
  }),
});


export const apiAppointments = createApi({
  reducerPath: "apiAppointments",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Appointments"],
  endpoints: (builder) => ({
    getAppointment: builder.query({
      query: () => apiRoutes.appointments.getAll,
      providesTags: ["Appointments"],
    }),
    getAppointmentById: builder.query({
      query: (id) => apiRoutes.appointments.getById(id),
      providesTags: (result, error, id) => [{ type: "Appointments", id }],
    }),
    createAppointment: builder.mutation({
      query: (data) => ({
        url: apiRoutes.appointments.create,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Appointments"],
    }),
    updateAppointment: builder.mutation({
      query: ({ id, ...data }) => ({
        url: apiRoutes.appointments.update(id),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, id) => [
        "Appointments",
        { type: "Appointments", id },
      ],
    }),
    deleteAppointment: builder.mutation({
      query: (id) => ({
        url: apiRoutes.appointments.delete(id),
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        "Appointments",
        { type: "Appointments", id },
      ],
    }),
  }),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPatientsQuery,
  useGetPatientByIdQuery,
  useDeletePatientMutation,
  useUpdatePatientMutation,
  useCreatePatientMutation,
} = api;

export const {
  useGetDoctorsQuery,
  useGetDoctorByIdQuery,
  useDeleteDoctorMutation,
  useUpdateDoctorMutation,
  useCreateDoctorMutation,
} = apiDoctors;

export const {
  useGetAppointmentQuery,
  useGetAppointmentByIdQuery,
  useDeleteAppointmentMutation,
  useUpdateAppointmentMutation,
  useCreateAppointmentMutation,
} = apiAppointments;
