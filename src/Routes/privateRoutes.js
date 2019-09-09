import LeadManagement from "../Modules/LeadManagement";
import Dashboard from "../Modules/Dashboard";
const PrivateRoutes = {
	Leads: {
		component: LeadManagement,
		path: "/leads-management"
	},
	Dashboard: {
		component: Dashboard,
		path: "/dashboard"
	}
};

export default PrivateRoutes;
