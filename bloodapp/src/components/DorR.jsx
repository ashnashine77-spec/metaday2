import React, { useState, useEffect } from 'react';
import {
  Typography,
  Container,
  Grid,
  Box,
  TextField,
  MenuItem,
  Button,
  Tabs,
  Tab
} from '@mui/material';

import { useSearchParams, useNavigate } from "react-router-dom";

// Blood groups
const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
const urgency = ['Immediate', 'Within 24 hours', 'Flexible'];

// Tab Panel
function CustomTabPanel({ children, value, index }) {
  return value === index && <Box sx={{ p: 3 }}>{children}</Box>;
}

const DorR = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const tab = searchParams.get("tab");

  const [value, setValue] = useState(tab === "request" ? 1 : 0);

  useEffect(() => {
    setValue(tab === "request" ? 1 : 0);
  }, [tab]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    navigate(`/DR?tab=${newValue === 1 ? "request" : "donate"}`);
  };

  // ---------------- STATE ----------------
  const [donateData, setDonateData] = useState({
    name: "",
    blood: "A+",
    date: "",
    location: "",
    notes: ""
  });

  const [requestData, setRequestData] = useState({
    patient: "",
    blood: "A+",
    units: "",
    urgency: "Immediate",
    date: "",
    location: "",
    contact: "",
    notes: ""
  });

  // ---------------- HANDLERS ----------------
  const handleDonateChange = (e) => {
    setDonateData({ ...donateData, [e.target.name]: e.target.value });
  };

  const handleRequestChange = (e) => {
    setRequestData({ ...requestData, [e.target.name]: e.target.value });
  };

  // ---------------- SUBMIT ----------------
  const handleDonateSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/donate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(donateData)
    });

    if (res.ok) {
      alert("Donation registered!");

      setDonateData({
        name: "",
        blood: "A+",
        date: "",
        location: "",
        notes: ""
      });
    } else {
      alert("Failed to register donation");
    }
  } catch (error) {
    console.error(error);
    alert("Server error");
  }
};

  const handleRequestSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestData)
    });

    if (res.ok) {
      alert("Request submitted!");

      setRequestData({
        patient: "",
        blood: "A+",
        units: "",
        urgency: "Immediate",
        date: "",
        location: "",
        contact: "",
        notes: ""
      });
    } else {
      alert("Failed to submit request");
    }
  } catch (error) {
    console.error(error);
    alert("Server error");
  }
};

  return (
    <>
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Typography variant="h4" fontWeight="bold">
          Donate or Request
        </Typography>
        <Typography variant="body2">
          Help save lives by donating or requesting blood.
        </Typography>
      </Box>

      {/* Tabs */}
      <Box sx={{ mt: 3 }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Donate" />
          <Tab label="Request" />
        </Tabs>

        {/* ---------------- DONATE ---------------- */}
        <CustomTabPanel value={value} index={0}>
          <Box component="form" onSubmit={handleDonateSubmit} sx={formStyle}>

            <TextField
              label="Name"
              name="name"
              value={donateData.name}
              onChange={handleDonateChange}
              required
              fullWidth
            />

            <TextField
              select
              label="Blood Group"
              name="blood"
              value={donateData.blood}
              onChange={handleDonateChange}
              fullWidth
            >
              {bloodGroups.map(g => (
                <MenuItem key={g} value={g}>{g}</MenuItem>
              ))}
            </TextField>

            <TextField
              type="datetime-local"
              name="date"
              value={donateData.date}
              onChange={handleDonateChange}
              required
              fullWidth
            />

            <TextField
              label="Location"
              name="location"
              value={donateData.location}
              onChange={handleDonateChange}
              required
              fullWidth
            />

            <TextField
              label="Notes"
              name="notes"
              value={donateData.notes}
              onChange={handleDonateChange}
              multiline
              rows={3}
              fullWidth
            />

            <Button type="submit" variant="contained" color="error">
              Submit Donation
            </Button>

          </Box>
        </CustomTabPanel>

        {/* ---------------- REQUEST ---------------- */}
        <CustomTabPanel value={value} index={1}>
          <Box component="form" onSubmit={handleRequestSubmit} sx={formStyle}>

            <TextField
              label="Patient Name"
              name="patient"
              value={requestData.patient}
              onChange={handleRequestChange}
              required
              fullWidth
            />

            <TextField
              select
              label="Blood Group"
              name="blood"
              value={requestData.blood}
              onChange={handleRequestChange}
              fullWidth
            >
              {bloodGroups.map(g => (
                <MenuItem key={g} value={g}>{g}</MenuItem>
              ))}
            </TextField>

            <TextField
              label="Units Needed"
              name="units"
              type="number"
              value={requestData.units}
              onChange={handleRequestChange}
              required
              fullWidth
            />

            <TextField
              select
              label="Urgency"
              name="urgency"
              value={requestData.urgency}
              onChange={handleRequestChange}
              fullWidth
            >
              {urgency.map(u => (
                <MenuItem key={u} value={u}>{u}</MenuItem>
              ))}
            </TextField>

            <TextField
              type="datetime-local"
              name="date"
              value={requestData.date}
              onChange={handleRequestChange}
              required
              fullWidth
            />

            <TextField
              label="Hospital Location"
              name="location"
              value={requestData.location}
              onChange={handleRequestChange}
              required
              fullWidth
            />

            <TextField
              label="Contact Number"
              name="contact"
              value={requestData.contact}
              onChange={handleRequestChange}
              required
              fullWidth
            />

            <TextField
              label="Notes"
              name="notes"
              value={requestData.notes}
              onChange={handleRequestChange}
              multiline
              rows={3}
              fullWidth
            />

            <Button type="submit" variant="contained" color="secondary">
              Submit Request
            </Button>

          </Box>
        </CustomTabPanel>
      </Box>
    </>
  );
};

const formStyle = {
  maxWidth: 500,
  mx: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

export default DorR;