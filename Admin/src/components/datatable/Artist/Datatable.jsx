import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { ArtistColumn } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import  AddArtistModal from "./AddArtistModal";

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/artists")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((item) => ({
          ...item,
          id: item._id // Rename _id to id
        }));
        setData(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const handleAddModalOpen = () => {
    console.log("handleAddModalOpen");
    setAddModalOpen(true);
  };

  const handleAddModalClose = () => {
    setAddModalOpen(false);
  };

  const handleAddArtist = (newArtist) => {
    // Send a POST request to the server to add the new artist
    fetch("/api/artists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArtist),
    })
      .then((response) => response.json())
      .then((addedArtist) => {
        setData([...data, addedArtist]);
        handleAddModalClose();
      })
      .catch((error) => {
        console.error("Error adding artist:", error);
      });
  };


  
const handleDelete = (id) => {
  // Send a DELETE request to the server to remove the blog post
  fetch(`/api/deleteresearch/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => {
      // Remove the deleted blog post from the state
      setData(data.filter((item) => item.id !== id));
    })
    .catch((error) => {
      console.error("Error deleting blog post:", error);
    });
};
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Edit</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];


  return (
    <div className="datatable">
      <div className="datatableTitle">
       <input type="text" placeholder="search" />
        <button onClick={handleAddModalOpen} className="link">
        Add New Artist
      </button>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={ArtistColumn.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
      <button onClick={handleAddModalOpen} className="link">
        Add New Artist
      </button>
      <AddArtistModal
        open={isAddModalOpen}
        onClose={handleAddModalClose}
        onAdd={handleAddArtist}
      />
    </div>
  );
};

export default Datatable;
