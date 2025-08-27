export const patientInputFields = [
  {
    name: 'fullName',
    type: 'text',
    placeholder: 'Повне ім’я пацієнта',
  },
  {
    name: 'birthDate',
    type: 'date',
    placeholder: 'Дата народження пацієнта',
  },
  {
    name: 'gender',
    type: 'select',
    placeholder: 'Стать пацієнта (чоловіча/жіноча)',
  },
  {
    name: 'phone',
    type: 'tel',
    placeholder: 'Контактний номер телефону',
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Електронна адреса пацієнта',
  },
  {
    name: 'address',
    type: 'text',
    placeholder: 'Адреса проживання',
  },
  {
    name: 'notes',
    type: 'textarea',
    placeholder: 'Додаткові примітки (наприклад, алергії)',
  },
]

export const emptyPatientData = {
  fullName: '',
  birthDate: '',
  gender: '',
  phone: '',
  email: '',
  address: '',
  notes: '',
}
