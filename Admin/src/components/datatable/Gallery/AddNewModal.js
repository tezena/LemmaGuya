import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";

const AddNewModal = ({ open, onClose, onSubmit }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [artistName, setArtistName] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = () => {
    const newImage = {
      imageUrl,
      title,
      description,
      artist_name: artistName,
      type,
    };
    onSubmit(newImage);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New</DialogTitle>
      <DialogContent>
        <TextField
          label="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Artist Name"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Add Image
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNewModal;
