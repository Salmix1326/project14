export const frontRoutes = {
  pages: {
    home: "/",
    patients: {
      base: "patients",
      edit: "edit/:id?",
    },
    doctors: {
      base: "doctors",
      edit: "edit/:id?",
    },
    appointments: {
      base: "appointments",
      edit: "edit/:id?",
    },
  },
  navigate: {
    patients: {
      list: "/patients",
      edit: (id) => `edit/${id}`,
      create: "edit",
    },
    doctors: {
      list: "/doctors",
      edit: (id) => `edit/${id}`,
      create: "edit",
    },
    appointments: {
      list: "/appointments",
      edit: (id) => `edit/${id}`,
      create: "edit",
    },
  },
};
