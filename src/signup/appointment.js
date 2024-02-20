// appointment.js

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import "dayjs/locale/en";
import React, { useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutDoctorCard from "../pages/aboutDoc/AboutDoctorCad";
import EnquiryForm from "./EnquiryForm";

dayjs.locale("en");
const availableDates = [
  dayjs("2024-02-17"),
  dayjs("2024-02-18"),
  dayjs("2024-02-19"),
  // Add more dates as needed
];

const timeSlots = ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"];
const styles = {
  containerStyle: {
    padding: 20,
    maxWidth: window.innerWidth - 200,
    margin: "auto",
    marginTop: 50,
    // height: "100vh", // Adjust the height as needed
  },

  textContainerStyle: {
    textAlign: "left",
    // backgroundColor: "#2196F3", // Background color, you can change it
    padding: "20px",
    color: "black",
  },
  formStyle: {
    alignItems: "flex-start",
  },
};
const AppointmentForm = () => {
  const enquiryFormRef = useRef(null);

  const handleEnquiryClick = () => {
    
    enquiryFormRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    contactNumber: "",
    email: "",
    selectedDate: null,
    selectedTimeSlot: "",
  });
  const selectedDoctor = {
    doctorId: 1,
    name: "Dr. John Doe",
    phoneNumber: "123-456-7890",
    image:
      "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
    exp: 45,
    degree: "MBBS, DM - Cardiology",
    location: "Bangalore",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Thanks for booking appointment! We'll contact you soon.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
    navigate("/home");
    // Add logic to handle form submission (e.g., sending data to the server).
  };

  const shouldDisableDate = (date) => {
    return !availableDates.some((availableDate) =>
      date.isSame(availableDate, "day")
    );
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, selectedDate: date, selectedTimeSlot: "" });
  };

  const handleTimeSlotChange = (e) => {
    setFormData({ ...formData, selectedTimeSlot: e.target.value });
  };

  const [selectedTimeSlot, setSelectedTimeSlot] = React.useState("");

  const handleTimeSlotClick = (slot) => {
    setSelectedTimeSlot(slot);
  };

  const cardData = [
    { id: 1, title: "Card 1", content: "Atrial Septal Defect (ASD) Repair" },
    { id: 2, title: "Card 2", content: "Bentall Procedure" },
    {
      id: 3,
      title: "Card 3",
      content: "Coronary Artery Bypass Grafting (CABG)",
    },
    {
      id: 4,
      title: "Card 4",
      content: "Cardiac Valve Replacement",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What is Lorem Ipsum?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      question: "How does it work?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      question: "Can I customize the settings?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      question: "Is it free?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div style={styles.containerStyle}>
      <Paper
        elevation={3}
        style={{
          maxWidth: window.innerWidth,
          margin: "auto",
          marginTop: 50,
        }}
      >
        <AboutDoctorCard doctor={selectedDoctor} onEnquiryClick={handleEnquiryClick}  />
      </Paper>

      <Grid container spacing={4}>
        <Grid
          item
          xs={8}
          sm={8}
          style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
        >
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "10px",
              backgroundColor: "#68F19F",
              marginTop: "10px",
            }}
          >
            <Typography variant="h5" color="#000000" fontWeight="bold">
              About Doc
            </Typography>
          </Paper>
          <div style={styles.textContainerStyle}>
            <Typography variant="subtitle1">
              An internationally famous and innovative laparoscopic surgeon is
              Dr. Pradeep Chowbey. He has taught more than 20,000 doctors from
              all over the world in minimally invasive procedures and has over
              45 years of surgical expertise. He was one of the first surgeons
              in North India to conduct a laparoscopic cholecystectomy, as well
              as the first in the Asia Pacific to use MAFT (Minimally Invasive
              Fistula Technology). He has charted his professional path with the
              primary goal of advancing minimal access, metabolic, and bariatric
              surgery throughout India and the Asian region. <br />
              <br />
              His Max Healthcare Institute was the first in India to be
              accredited as a Center of Excellence for Metabolic & Bariatric
              Surgery and Hernia Surgery by the Surgical Review Corporation, USA
              (2011-2014)
              <br />
              Additional text or content can go here.
            </Typography>
          </div>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "10px",
              backgroundColor: "#68F19F",
              marginTop: "10px",
            }}
          >
            <Typography variant="h5" color="#000000" fontWeight="bold">
              Procedures
            </Typography>
          </Paper>
          <Grid container rowSpacing={1} columnSpacing={2} my={1}>
            {cardData.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  variant="contained"
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  <CardContent>
                    <Typography variant="subtitle1" color="text.primary">
                      {card.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid
            style={{
              // marginTop: "50px",
              marginLeft: "0px",
              marginRight: "auto",
              width: "100%",
            }}
          >
            <Paper
              elevation={3}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: "10px",
                width: "100%",
                backgroundColor: "#2196F3",
                marginTop: "10px",
                marginLeft: "0px",
              }}
            >
              <Typography variant="h5" color="white">
                FAQs
              </Typography>
            </Paper>
            {faqData.map((faq) => (
              <Accordion key={faq.id}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`faq-panel-${faq.id}-content`}
                  id={`faq-panel-${faq.id}-header`}
                >
                  <Typography variant="h6">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={8} sm={4}>
          <div  style={styles.formStyle}>
            <EnquiryForm />
          </div>
        </Grid>
      </Grid>

      <Typography ref={enquiryFormRef} variant="h5" gutterBottom my={2}>
        Appointment Form
      </Typography>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#FFFFFF", // You can change the background color
          marginTop: "10px",
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: 600 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Country"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Contact Number"
                value={formData.contactNumber}
                onChange={(e) =>
                  setFormData({ ...formData, contactNumber: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
              <FormControl fullWidth variant="outlined">
                <InputLabel> Time Slot </InputLabel>
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
              <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
                {timeSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant="outlined"
                    onClick={() => handleTimeSlotClick(slot)}
                    style={{
                      color: selectedTimeSlot === slot ? "white" : "black",
                      backgroundColor:
                        selectedTimeSlot === slot ? "blue" : "white",
                    }}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: 20 }}
              >
                Confirm
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default AppointmentForm;
