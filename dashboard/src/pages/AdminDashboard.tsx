import { useState, useEffect } from 'react';
import AdminBooking from '../components/AdminBooking';
import { supabase } from '../config/supabaseClient';
import UserCard from '../components/UserCard';
import UserIcon from '../images/icon/UserIcon';
import OrderIcon from '../images/icon/OrderIcon';
import SaleIcon from '../images/icon/SaleIcon';

const AdminDashboard = () => {
  const [visibleVehicles, setVisibleVehicles] = useState(2);
  const [isLoading, setIsLoading] = useState(true);
  const [vehicles, setVehicles] = useState<
    { id: number; carBrand: string; vin: string }[]
  >([]);

  useEffect(() => {
    // Fetch data from Supabase and update the vehicles state
    const fetchVehicles = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase.from('vehicles').select('*');
        // .eq('user_id', user.id);
        if (error) {
          console.error('Error fetching data:', error.message);
        } else {
          setVehicles(data);
        }
      } catch (error) {
        console.error('Error fetching data:', (error as Error).message);
      }
      setIsLoading(false);
    };
    fetchVehicles();
  }, []);

  return (
    <>
      <h3 className="text-xl text-start font-medium mb-4 text-black dark:text-white">
        Overview
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <UserCard
          icon={<OrderIcon />}
          label="Orders"
          count={2000}
          linkTo="orders"
        />
        <UserCard
          icon={<UserIcon />}
          label="Users"
          count={2000}
          linkTo="users"
        />
        <UserCard
          icon={<SaleIcon />}
          label="Sales"
          count={`N` + 2000}
          linkTo="sales"
        />
      </div>
      <h3 className="text-xl text-start font-medium mb-2 mt-8 text-black dark:text-white">
        Appointments
      </h3>
      <AdminBooking />
    </>
  );
};

export default AdminDashboard;
