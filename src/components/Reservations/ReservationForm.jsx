import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DateSelector from './DateSelector';
import { supabase } from '../../supabaseClient';


const ReservationForm = () => {
  const { serviceCode } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [clientId, setClientId] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleClientIdChange = async (e) => {
    const id = e.target.value;
    setClientId(id);

    if (id) {
      const { data: clientData, error } = await supabase
        .from('clients')
        .select('first_name, last_name, phone, email')
        .eq('id', id)
        .single();

      if (clientData) {
        setFormData({
          firstName: clientData.first_name,
          lastName: clientData.last_name,
          phone: clientData.phone || '',
          email: clientData.email || ''
        });
      } else if (error) {
        console.error('Client not found:', error);
        alert('Client ID not found. Please enter your information.');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let clientIdToUse = clientId;
  
    // Step 1: If no client ID was provided or found, add the client
    if (!clientId) {
      const { data: newClient, error: clientError } = await supabase
        .from('clients')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
          email: formData.email
        })
        .select()
        .single();
  
      if (clientError) {
        console.error('Error creating client:', clientError);
        alert('There was an error saving the client. Please try again.');
        return;
      }
  
      clientIdToUse = newClient.id;
    }
  
    // Step 2: Fetch staff priorities for the selected service
    const { data: priorities, error: prioritiesError } = await supabase
      .from('service_priorities')
      .select('staff_id')
      .eq('service_id', serviceCode)
      .order('priority', { ascending: true });
  
    if (prioritiesError || !priorities.length) {
      console.error('Error fetching priorities:', prioritiesError);
      alert('There was an error retrieving staff information. Please try again.');
      return;
    }
  
    // Step 3: Check availability of staff in priority order
    let assignedStaffId = null;
  
    for (const priority of priorities) {
      const { data: conflictingAppointments, error: availabilityError } = await supabase
        .from('appointments')
        .select('id')
        .eq('staff_id', priority.staff_id)
        .eq('date', selectedDate.toISOString().split('T')[0])
        .eq('start_time', selectedTime);
  
      if (availabilityError) {
        console.error('Error checking staff availability:', availabilityError);
        alert('There was an error checking staff availability. Please try again.');
        return;
      }
  
      if (conflictingAppointments.length === 0) {
        // Staff member is available
        assignedStaffId = priority.staff_id;
        break;
      }
    }
  
    if (!assignedStaffId) {
      alert('No staff members are available at the selected time. Please choose a different time.');
      return;
    }
  
    // Step 4: Insert appointment with assigned staff member
    const { error: appointmentError } = await supabase
      .from('appointments')
      .insert([
        {
          service_id: serviceCode,
          client_id: clientIdToUse,
          staff_id: assignedStaffId,
          date: selectedDate.toISOString().split('T')[0],
          start_time: selectedTime,
          end_time: new Date(new Date(`1970-01-01T${selectedTime}`).getTime() + 60 * 60000).toTimeString().split(' ')[0]
        }
      ]);
  
    if (appointmentError) {
      console.error('Error creating appointment:', appointmentError);
      alert('There was an error saving the appointment. Please try again.');
    } else {
      alert('Your appointment has been successfully created!');
      setFormData({ firstName: '', lastName: '', phone: '', email: '' });
      setSelectedDate(null);
      setSelectedTime('');
      setClientId('');
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Reservar una cita</h2>

      {/* Client ID */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white">Client ID (optional)</label>
        <input
          type="text"
          value={clientId}
          onChange={handleClientIdChange}
          className="mt-1 block w-full p-2 border rounded-md"
          placeholder="Enter your Client ID if you know it"
        />
      </div>

      {/* Date Selector */}
      <DateSelector selectedDate={selectedDate} onDateChange={handleDateChange} />

      {/* Time Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white">Select a Time</label>
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          required
          className="mt-1 block w-full p-2 border rounded-md"
        >
          <option value="" disabled>Select a time</option>
          <option value="09:00:00">09:00 AM</option>
          <option value="10:00:00">10:00 AM</option>
          <option value="11:00:00">11:00 AM</option>
          <option value="12:00:00">12:00 PM</option>
          <option value="13:00:00">01:00 PM</option>
          <option value="14:00:00">02:00 PM</option>
          <option value="15:00:00">03:00 PM</option>
          <option value="16:00:00">04:00 PM</option>
        </select>
      </div>

      {/* First Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full p-2 border rounded-md"
          placeholder="First Name"
        />
      </div>

      {/* Last Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full p-2 border rounded-md"
          placeholder="Last Name"
        />
      </div>

      {/* Phone (Optional) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white">Phone (optional)</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="mt-1 block w-full p-2 border rounded-md"
          placeholder="Phone Number"
        />
      </div>

      {/* Email (Optional) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white">Email (optional)</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="mt-1 block w-full p-2 border rounded-md"
          placeholder="Email"
        />
      </div>

      <button type="submit" className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-primary-dark transition duration-200">
        Reservar
      </button>
    </form>
  );
};

export default ReservationForm;
