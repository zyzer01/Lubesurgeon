import { useState, useEffect } from 'react';
import { supabase } from '../config/supabaseClient';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

export default function DashBookingRow({ booking }) {
  const [fullName, setFullName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    async function getProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const metadata = user.user_metadata;

      setFullName(metadata.full_name);
      setPhoneNumber(metadata.phone);
      setEmail(user.email);
    }
    getProfile();
  }, []);

  //PAYMENT STARTS
  const config = {
    public_key: 'FLWPUBK_TEST-1f09b7c98dbf6fd24417d32d4d9a6538-X',
    tx_ref: Date.now(),
    amount: booking.servicePrice,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: email,
      phone_number: phoneNumber,
      name: fullName,
    },
    customizations: {
      title: `Payment for ${booking.service}`,
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  //PAYMENT ENDS

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
    <tbody>
      <tr key={booking.id}>
        <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
          <h5 className="font-medium text-black dark:text-white">
            {booking.carBrand}
          </h5>
          <p className="text-sm">
            {booking.carModel}, ({booking.carYear})
          </p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="text-black dark:text-white">{booking.service}</p>
          <p className="text-success text-sm font-medium">
            {Number(booking.servicePrice).toLocaleString('en-US', {
              style: 'currency',
              currency: 'NGN',
            })}
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
            onClick={() => {
              handleFlutterPayment({
                callback: (response) => {
                  console.log(response);
                  closePaymentModal(); // this will close the modal programmatically
                },
                onClose: () => {},
              });
            }}
          >
            Pay now
          </button>
        </td>
      </tr>
    </tbody>
  );
}
