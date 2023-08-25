import { useState, useEffect } from 'react';
import { supabase } from '../config/supabaseClient';
import MyModal from './Modal';

interface Booking {
  id: number;
  carBrand: string;
  carModel: string;
  lga: string;
  completeStatus: string;
  service: string;
  date: string;
  // ... other properties
}

const BookingTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bookingData, setBookingData] = useState<Booking[]>([]);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [orderBy, setOrderBy] = useState('created_at');
  const [visibleBookings, setVisibleBookings] = useState(2);
  const [showAll, setShowAll] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState<number | null>(
    null,
  ); // Store selected booking ID

  const handleShowMore = () => {
    setVisibleBookings(bookingData.length); // Show all vehicles
    setShowAll(true);
  };

  const handleHide = () => {
    setVisibleBookings(2); // Hide additional vehicles
    setShowAll(false);
  };

  // Function to handle bookings deletion
  const handleDelete = async (bookingId: number) => {
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', bookingId);

      if (error) {
        console.error('Error deleting booking:', error.message);
        // Handle the error
      } else {
        console.log('Booking deleted successfully');

        setBookingData((prevData) =>
          prevData.filter((booking) => booking.id !== bookingId),
        );
      }
    } catch (error) {
      console.error('Error deleting vehicle:', (error as Error).message);
      // Handle the error
    } finally {
      setIsLoading(false);
    }
  };

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
    <>
      {/* Cancel Modal */}
      <MyModal
        isOpen={cancelModalOpen}
        closeModal={() => setCancelModalOpen(false)}
        actionText="Cancel Booking"
        actionSub="This action is irreversible. Are you sure you want to cancel this appointment?"
        onActionClick={() => {
          if (selectedBookingId !== null) {
            handleDelete(selectedBookingId);
          }
          setCancelModalOpen(false);
          setSelectedBookingId(null);
        }}
        buttonColor="bg-danger"
      />
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
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
                  Actions
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
                  <td>No bookings</td>
                </tr>
              ) : (
                bookingData.slice(0, visibleBookings).map((booking) => (
                  <tr key={booking.id}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {booking.carBrand}
                      </h5>
                      <p className="text-sm">{booking.carModel}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {booking.service}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {booking.lga}
                      </p>
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
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <button
                        className="text-danger rounded-md text-sm font-medium hover:text-meta-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75"
                        onClick={() => {
                          setSelectedBookingId(booking.id);
                          setCancelModalOpen(true);
                        }}
                      >
                        Cancel
                      </button>
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
          {bookingData.length > visibleBookings && (
            <div className="text-center py-5 text-primary">
              {showAll ? (
                <button onClick={handleHide}>Hide</button>
              ) : (
                <button onClick={handleShowMore}>See more</button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BookingTable;
