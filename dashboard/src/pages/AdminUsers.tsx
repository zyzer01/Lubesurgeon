import Breadcrumb from '../components/Breadcrumb';
import AdminSale from './AdminSales';
import ChartTwo from '../components/ChartTwo';
import TableOne from '../components/TableOne';

const AdminUsers = () => {
  return (
    <>
      <Breadcrumb pageName="Users" />
      <div className="flex flex-col gap-10">
        <TableOne />
        <AdminSale />
        <ChartTwo />
      </div>
    </>
  );
};

export default AdminUsers;
