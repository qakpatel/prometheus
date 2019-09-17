import Dashboard from "../Modules/Dashboard";
import UnitPlanner from './../Modules/UnitPlanner'

const PrivateRoutes = {
	Dashboard: {
		component: Dashboard,
		path: "/dashboard"
	},
	UnitPlanner: {
		component: UnitPlanner,
		path: "/unit-planner"
	}
};

export default PrivateRoutes;
