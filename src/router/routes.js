import Home from '@/pages/Home'
import { frontRoutes } from './frontRoutes'
import Layout from '@/components/Layout'
import PatientsList from '@/pages/Patients'
import PatientForm from '@/pages/Patients/PatientForm'
import DoctorsList from '@/pages/Doctors'
import DoctorForm from '@/pages/Doctors/DoctorForm'
import AppointmentList from '@/pages/Appointsments'
import AppointmentForm from '@/pages/Appointsments/AppointmentForm'
import Page404 from '@/pages/Page404'
export const routes = [
  {
    path: frontRoutes.pages.home,
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
        meta: {
          labelForMainMenu: 'Головна',
        },
      },
      //---- Пацієнти
      {
        path: frontRoutes.pages.patients.base,
        children: [
          {
            index: true,
            Component: PatientsList,
            meta: {
              labelForMainMenu: 'Пацієнти',
            },
          },
          {
            path: frontRoutes.pages.patients.edit,
            Component: PatientForm,
          },
        ],
      },
      //------- Лікарі
      {
        path: frontRoutes.pages.doctors.base,
        children: [
          {
            index: true,
            Component: DoctorsList,
            meta: {
              labelForMainMenu: 'Лікарі',
            },
          },
          {
            path: frontRoutes.pages.doctors.edit,
            Component: DoctorForm,
          },
        ],
      },
      //------- Зустрічі
      {
        path: frontRoutes.pages.appointments.base,
        children: [
          {
            index: true,
            Component: AppointmentList,
            meta: {
              labelForMainMenu: 'Призначені зустрічі',
            },
          },
          {
            path: frontRoutes.pages.appointments.edit,
            Component: AppointmentForm,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    Component: Page404,
  },
]
