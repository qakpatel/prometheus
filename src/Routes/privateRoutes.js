//import LeadManagement from "../Modules/LeadManagement";
import Dashboard from "../Modules/Dashboard";
import LeadForm from '../Modules/LeadForm'
import UnitPlanner from './../Modules/UnitPlanner'

const PrivateRoutes = {
	Dashboard: {
		component: Dashboard,
		path: "/dashboard"
	},
	LeadForm: {
		component: LeadForm,
		path: "/lead-form"
	},
	// Leads: {
	// 	component: LeadManagement,
	// 	path: "/leads-management"
	// },
	UnitPlanner: {
		component: UnitPlanner,
		path: "/unit-planner"
	}
};

export default PrivateRoutes;
