import React, { useState } from 'react';
import { TextField, Button, Box, Container } from '@mui/material';

const ContactForm = ({ onAddContact }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    jobTitle: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(formData);
    setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', company: '', jobTitle: '' });
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
        <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
        <TextField label="Email" name="email" value={formData.email} onChange={handleChange} required />
        <TextField label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        <TextField label="Company" name="company" value={formData.company} onChange={handleChange} />
        <TextField label="Job Title" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
        <Button type="submit" variant="contained">Add Contact</Button>
      </Box>
    </Container>
  );
};

export default ContactForm;
