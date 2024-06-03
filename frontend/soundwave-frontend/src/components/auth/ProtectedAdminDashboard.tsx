import withAuth from '../../hoc/withAuth';
import AdminDashboard from '../dashboard/admindashboard';

const ProtectedAdminDashboard = withAuth(AdminDashboard);

export default ProtectedAdminDashboard;
