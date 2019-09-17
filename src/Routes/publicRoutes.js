import Login from '../Modules/Login'
import Enquire from '../Modules/Enquire'
const PublicRoutes = {
    Login: {
        component: Login,
        path: '/'
    },
    Enquire: {
        component: Enquire,
        path: '/enquire'
    }
};

export default PublicRoutes