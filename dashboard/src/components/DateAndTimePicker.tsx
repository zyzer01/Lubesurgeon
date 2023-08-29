import { SetStateAction, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setHours, setMinutes } from 'date-fns';

const DateAndTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(
    setHours(setMinutes(new Date(), 30), 16),
  );

  const handleDateChange = (date: SetStateAction<Date>) => {
    setSelectedDate(date);
  };

  const availableTimes = [];
  for (let hour = 7; hour <= 20; hour++) {
    availableTimes.push(setHours(setMinutes(new Date(), 0), hour));
    availableTimes.push(setHours(setMinutes(new Date(), 30), hour));
  }

  return (
    <div className="w-full">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm aa"
        includeTimes={availableTimes}
        className="w-full placeholder:text-slate-400 placeholder:text-sm bg-white rounded-lg border border-gray-300 focus:border-primary focus:ring-amber-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
};

export default DateAndTimePicker;
