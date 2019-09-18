import LeadManagement from './../Modules/LeadManagment'
import Dashboard from "../Modules/Dashboard";
import LeadForm from '../Modules/LeadForm'
import UnitPlanner from './../Modules/UnitPlanner'
import Timeline from './../Modules/LeadManagment/Timeline'

const PrivateRoutes = {
	Dashboard: {
		component: Dashboard,
		path: "/dashboard"
	},
	LeadForm: {
		component: LeadForm,
		path: "/lead-form"
	},
	Leads: {
		component: LeadManagement,
		path: "/leads-management"
	},
	Timeline: {
		component: Timeline,
		path: "/leads-management/timeline"
	},
	UnitPlanner: {
		component: UnitPlanner,
		path: "/unit-planner"
	}
};

export default PrivateRoutes;
