import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

const AddNewModal = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publicationDate: "",
    summary: "",
    fileUrl: "",
    imageUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
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
  />
  <TextField
    label="Author"
    name="author"
    value={formData.author}
    onChange={handleInputChange}
    fullWidth
  />
  <TextField
    label="Publication Date"
    name="publicationDate"
    type="date"
    value={formData.publicationDate}
    onChange={handleInputChange}
    fullWidth
    InputLabelProps={{
      shrink: true,
    }}
  />
  <TextField
    label="Summary"
    name="summary"
    multiline
    rows={4}
    value={formData.summary}
    onChange={handleInputChange}
    fullWidth
  />
  <TextField
    label="File URL"
    name="fileUrl"
    value={formData.fileUrl}
    onChange={handleInputChange}
    fullWidth
  />
  <TextField
    label="Image URL"
    name="imageUrl"
    value={formData.imageUrl}
    onChange={handleInputChange}
    fullWidth
  />
</DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="secondary">
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
