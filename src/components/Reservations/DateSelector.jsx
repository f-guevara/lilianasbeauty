import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelector = ({ selectedDate, onDateChange }) => {
  return (
    <div className="date-picker">
      <label className="block text-sm font-medium text-gray-700 dark:text-white">Select a Date</label>
      <DatePicker
        selected={selectedDate}
        onChange={onDateChange}
        minDate={new Date()} // Prevent past date selection
        dateFormat="MMMM d, yyyy" // Customize format (e.g., "October 27, 2024")
        className="mt-1 block w-full p-2 border rounded-md"
        placeholderText="Choose a date"
      />
    </div>
  );
};

export default DateSelector;
