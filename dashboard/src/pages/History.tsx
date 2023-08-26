import Breadcrumb from '../components/Breadcrumb';
import Sale from './AdminSales';
import ChartTwo from '../components/ChartTwo';
import TableOne from '../components/UsersTable';

const History = () => {
  return (
    <>
      <Breadcrumb pageName="Service History" />
      <div className="flex flex-col gap-10">
        <TableOne />
        <Sale />
        <ChartTwo />
      </div>
    </>
  );
};

export default History;
