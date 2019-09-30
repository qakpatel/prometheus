import LeadManagement from './../Modules/LeadManagment'
import Dashboard from "../Modules/Dashboard";
import LeadForm from '../Modules/LeadForm'
import UnitPlanner from './../Modules/UnitPlanner'
import Timeline from './../Modules/LeadManagment/Timeline'
import Advance from './../Modules/LeadManagment/leadtable/components/AdvanceFilter'

const PrivateRoutes = {
	Dashboard: {
		component: Dashboard,
		path: "/dashboard"
	},
	LeadForm: {
		component: LeadForm,
		path: "/leads-management/create"
	},
	Leads: {
		component: LeadManagement,
		path: "/leads-management"
	},
	Timeline: {
		component: Timeline,
		path: "/leads-management/timeline"
	},
	Advance: {
		component: Advance,
		path: "/leads-management/advancefilter"
	},
	UnitPlanner: {
		component: UnitPlanner,
		path: "/unit-planner"
	}
};

export default PrivateRoutes;
