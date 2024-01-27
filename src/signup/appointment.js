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
} from '@material-ui/core';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    contactNumber: '',
    email: '',
    selectedDate: null,
    selectedTimeSlot: '',
  });

  // Example time slots (replace with your actual time slots)
  const timeSlots = ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., sending data to the server).
    console.log('Form submitted:', formData);
  };

  return (
    <Paper elevation={3} style={{ padding: 20, maxWidth: 400, margin: 'auto', marginTop: 50 }}>
      <Typography variant="h5" gutterBottom>
        Appointment Form
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last Name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Country"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
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
          <Grid item xs={12}>
            <DatePicker
              selected={formData.selectedDate}
              onChange={(date) => setFormData({ ...formData, selectedDate: date })}
              dateFormat="dd/MM/yyyy"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Time Slot</InputLabel>
              <Select
                value={formData.selectedTimeSlot}
                onChange={(e) => setFormData({ ...formData, selectedTimeSlot: e.target.value })}
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
