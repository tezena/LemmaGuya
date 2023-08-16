import React, { useState } from "react";
import { Modal, Button, TextField } from "@mui/material";
import "./AddArtistModal.scss"; // Your custom styles

const AddArtistModal = ({ open, onClose, onAdd }) => {
  const [artistInfo, setArtistInfo] = useState({
    name: "",
    imageUrl: "",
    bio: "",
    phone: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtistInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    onAdd(artistInfo);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} className="addArtistModal">
      <div className="modalContent">
        <h2>Add New Artist</h2>
        <TextField
          label="Name"
          name="name"
          value={artistInfo.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Image URL"
          name="imageUrl"
          value={artistInfo.imageUrl}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Bio"
          name="bio"
          value={artistInfo.bio}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone"
          name="phone"
          value={artistInfo.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Location"
          name="location"
          value={artistInfo.location}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" onClick={handleAdd}>
          Add Artist
        </Button>
      </div>
    </Modal>
  );
};

export default AddArtistModal;
