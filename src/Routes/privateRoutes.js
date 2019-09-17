//import LeadManagement from "../Modules/LeadManagement";
import Dashboard from "../Modules/Dashboard";
import LeadForm from '../Modules/LeadForm'
const PrivateRoutes = {
	// Leads: {
	// 	component: LeadManagement,
	// 	path: "/leads-management"
	// },
	Dashboard: {
		component: Dashboard,
		path: "/dashboard"
	},
	LeadForm: {
		component: LeadForm,
		path: "/lead-form"
	},
	// UnitPlanner: {
	// 	component: UnitPlanner,
	// 	path: "/unit-planner"
	// }
};

export default PrivateRoutes;
