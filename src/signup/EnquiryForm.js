// EnquiryForm.jsx => signup k andar. new file

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";

const EnquiryForm = () => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        my={2}
        height="100vh" // Adjust the height as needed
      >
        <Paper style={{ width: "100%", padding: "20px" }}>
          <Typography variant="h5" gutterBottom>
            Please Enquire
          </Typography>
          <form>
            <TextField
              label="Your Name"
              variant="outlined"
              margin="normal"
              required
              fullWidth
            />
            <TextField
              label="Your Email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="email"
            />
            <FormControl fullWidth margin="normal" required>
              <InputLabel id="country-label">Select Country</InputLabel>
              <Select labelId="country-label" label="Select Country">
                <MenuItem value="india">India</MenuItem>
                <MenuItem value="australia">Australia</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Mobile Number"
              variant="outlined"
              margin="normal"
              fullWidth
              type="tel"
            />
            <TextField
              label="Medical Requirements"
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              rows={4}
            />
            {/* <button type="submit">Submit</button> */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: 20 }}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default EnquiryForm;
