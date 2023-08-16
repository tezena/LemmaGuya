import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";

const AddNewModal = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({ title: "", description: "", location: "", date: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({ title: "", description: "", location: "", date: "" }); // Clear form after submission
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNewModal;
