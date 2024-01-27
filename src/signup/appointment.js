import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

dayjs.locale('en');

// Example available dates (replace with your actual available dates)
const availableDates = [
  dayjs('2024-01-27'),
  dayjs('2024-01-28'),
  dayjs('2024-01-29'),
  // Add more dates as needed
];

const timeSlots = ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'];

const AppointmentForm = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    contactNumber: '',
    email: '',
    selectedDate: null,
    selectedTimeSlot: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Thanks for booking appointment! We\'ll contact you soon.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    navigate('/home');
    // Add logic to handle form submission (e.g., sending data to the server).
  };

  const shouldDisableDate = (date) => {
    return !availableDates.some((availableDate) => date.isSame(availableDate, 'day'));
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, selectedDate: date, selectedTimeSlot: '' });
  };

  const handleTimeSlotChange = (e) => {
    setFormData({ ...formData, selectedTimeSlot: e.target.value });
  };

  return (
    <Paper elevation={3} style={{ padding: 20, maxWidth: 800, margin: 'auto', marginTop: 50 }}>
      <Typography variant="h5" gutterBottom>
        Appointment Form
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Country"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Contact Number"
              value={formData.contactNumber}
              onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                onChange={handleDateChange}
                renderInput={(startProps, endProps) => (
                  <>
                    <TextField
                      {...startProps}
                      fullWidth
                      label="Select Date"
                      variant="standard"
                      error={!formData.selectedDate}
                    />
                  </>
                )}
                shouldDisableDate={shouldDisableDate}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Time Slot</InputLabel>
              <Select
                value={formData.selectedTimeSlot}
                onChange={handleTimeSlotChange}
                disabled={!formData.selectedDate}
              >
                <MenuItem value="" disabled>
                  Select a time slot
                </MenuItem>
                {timeSlots.map((slot) => (
                  <MenuItem key={slot} value={slot}>
                    {slot}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
          Submit
        </Button>
      </form>
    

    </Paper>
  );
};

export default AppointmentForm;
