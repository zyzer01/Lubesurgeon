import Breadcrumb from '../components/Breadcrumb';
import TestForm from '../components/TestForm';

const History = () => {
  return (
    <>
      <Breadcrumb pageName="Service History" />
      <div className="flex flex-col gap-10">
        <TestForm />
      </div>
    </>
  );
};

export default History;
