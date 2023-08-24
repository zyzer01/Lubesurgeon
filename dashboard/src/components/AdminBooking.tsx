import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { supabase } from '../config/supabaseClient';
import MyModal from './Modal';

interface Booking {
  id: number;
  carBrand: string;
  carModel: string;
  carYear: string;
  lga: string;
  ngState: string;
  paymentStatus: string;
  date: string;
  service: string;
  email: string;
  phoneNumber: number;
  vehicleType: number;
  // ... other properties
}

const AdminBooking = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bookingData, setBookingData] = useState<Booking[]>([]);
  const [approveModalOpen, setApproveModalOpen] = useState(false); // State for Approve modal
  const [cancelModalOpen, setCancelModalOpen] = useState(false); // State for Cancel modal
  const [selectedBookingId, setSelectedBookingId] = useState<number | null>(null); // Store selected booking ID


  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

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
        const { data, error } = await supabase.from('bookings').select('*');

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
  }, []);

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
     <MyModal
        isOpen={approveModalOpen}
        closeModal={() => setApproveModalOpen(false)}
        actionText="Approve Booking"
        actionSub="This action is irreversible. Are you sure you want to approve this appointment?"
        onActionClick={() => {
          // Perform your approve logic here
          setApproveModalOpen(false);
        }}
        buttonColor="bg-success"
      />
{/* handleDelete(booking.id) */}
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
                  Location
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Contact
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Date
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Status
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Actions
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white"></th>
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
                bookingData.map((booking) => (
                  <tr key={booking.id}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {booking.carBrand}
                      </h5>
                      <p className="text-sm font-medium">{booking.carModel}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        {booking.lga}
                      </h5>
                      <p className="text-sm">{booking.ngState}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        {booking.phoneNumber}
                        <p className="font-thin text-sm">{booking.email}</p>
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {formatDateTime(booking.date)}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="inline-flex rounded-full bg-warning bg-opacity-10 py-1 px-3 text-sm font-medium text-warning">
                        {/* {booking.paymentStatus} */} Pending
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <td className="py-5 px-4 dark:border-strokedark">
                          <div className="flex items-center space-x-3.5">
                            <button
                              title="Cancel Booking"
                              className="hover:text-danger"
                              onClick={() => {
                                setSelectedBookingId(booking.id);
                                setCancelModalOpen(true);
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                className="bi bi-x-circle"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </button>
                            <button
                              title="Approve Booking"
                              className="hover:text-success"
                              onClick={() => {
                                setSelectedBookingId(booking.id);
                                setApproveModalOpen(true);
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                className="bi bi-check-circle"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminBooking;
