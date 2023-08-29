import { useState, useEffect } from 'react';
import { supabase } from '../config/supabaseClient';
import { Link } from 'react-router-dom';
import DashBookingRow from './DashBookingRow';

interface Booking {
  id: number;
  carBrand: string;
  carModel: string;
  carYear: number;
  lga: string;
  completeStatus: string;
  date: string;
  service: string;
  servicePrice: number;
  // ... other properties
}

const DashboardBooking = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [orderBy, setOrderBy] = useState('created_at');
  const [bookingData, setBookingData] = useState<Booking[]>([]);
  const [visibleBookings, setVisibleBookings] = useState(5);

  useEffect(() => {
    const fetchBookingData = async () => {
      setIsLoading(true);
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        const { data, error } = await supabase
          .from('bookings')
          .select('*')
          .eq('userId', user.id)
          .order(orderBy, { ascending: false });
        if (error) {
          console.error('Error fetching data:', error.message);
          // Handle the error
        } else {
          setBookingData(data);
        }
      } catch (error) {
        console.error('Error inserting data:', (error as Error).message);
        // Handle the error
      }
      setIsLoading(false);
    };
    fetchBookingData();
  }, [orderBy]);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <div className="mb-4">
          <h1>Upcoming Appointment</h1>
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Vehicle
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Service
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Location
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Date
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Payment
              </th>
            </tr>
          </thead>
          {/* <tbody> */}
          {isLoading ? (
            <tr className="text-gray-900 font-bold text-center flex justify-center">
              <td>Loading...</td>
            </tr>
          ) : bookingData.length === 0 ? (
            <tr className="text-gray-500 text-lg mt-5 flex justify-center">
              <td>No Appointments</td>
            </tr>
          ) : (
            bookingData
              .slice(0, visibleBookings)
              .map((booking) => (
                <DashBookingRow booking={booking} key={booking.id} />
              ))
          )}
          {/* </tbody> */}
        </table>
        <div className="text-center py-5 text-primary">
          <Link to={'/bookings'}>See All</Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardBooking;
