import { useState, useEffect } from 'react';
import { supabase } from '../config/supabaseClient';
import { Link } from 'react-router-dom';

interface Booking {
  id: number;
  carBrand: string;
  carModel: string;
  carYear: number;
  lga: string;
  completeStatus: string;
  date: string;
  service: string;
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
        const { data, error } = await supabase
          .from('bookings')
          .select('*')
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

  const formatDateTime = (dateTimeString: string | number | Date) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateTimeString).toLocaleDateString('en-US', options);
  };

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
          <tbody>
            {isLoading ? (
              <tr className="text-gray-900 font-bold text-center flex justify-center">
                <td>Loading...</td>
              </tr>
            ) : bookingData.length === 0 ? (
              <tr className="text-gray-500 text-lg mt-5 flex justify-center">
                <td>No Appointments</td>
              </tr>
            ) : (
              bookingData.slice(0, visibleBookings).map((booking) => (
                <tr key={booking.id}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {booking.carBrand}
                    </h5>
                    <p className="text-sm">{booking.carModel}, ({booking.carYear})</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {booking.service}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{booking.lga}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    {booking.completeStatus === 'Completed' ? (
                      <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                        Completed
                      </p>
                    ) : (
                      <p className="inline-flex rounded-full bg-warning bg-opacity-10 py-1 px-3 text-sm font-medium text-warning">
                        Pending
                      </p>
                    )}
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {formatDateTime(booking.date)}
                    </p>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="bg:meta-3 text-meta-3 rounded-md border border-success px-4 py-2 text-sm font-medium hover:text-white hover:bg-success focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75"
                      // onClick={onActionClick}
                    >
                      Pay now
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="text-center py-5 text-primary">
          <Link to={'/bookings'}>See All</Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardBooking;
