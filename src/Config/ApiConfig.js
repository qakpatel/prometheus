export default {
  // API_BASE_URL: "https://api.prometheusschool.com/api/v1/",
  CLIENT_ID: 2,
  // CLIENT_SECRET: "9Dm89T4aSrQ277MZegOEulEyzjqe24CX3wtV61jr",
  API_BASE_URL: "http://10.0.87.51/api/v1/",
  CLIENT_SECRET: "DyOJg09XQK3Ul7Ag7LvC5cJcnu9htbw3qQTh8YaW",
  ENDPOINTS: {
    LOGIN: "oauth/token",
    REFRESH_TOKEN: "oauth/token",
    USERINFO: "user",
    LEADS: "leads",
    LEAD_FORM: "leads/create",
    UNITPLAN: "unit-plan",
    LOGOUT: "logout",
    DASHBOARD: "dashboard",
    NOTIFICATIONS: "notifications"
  },
  METHODS: {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
    PATCH: "PATCH"
  },
  ERROR_CODES: {},
  ERROR_MESSAGES: {
    DEFAULT: "Some error occured."
  }
};
