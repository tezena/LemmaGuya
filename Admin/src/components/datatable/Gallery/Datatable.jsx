import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { GalleryColumn } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import  AddNewModal from "./AddNewModal";
import { Button } from "@mui/material";


const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/getimages")
      .then((response) => response.json())
      .then((data) => {
      
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const [isAddModalOpen, setAddModalOpen] = useState(false);



  const handleAdd = (newData) => {
   
    fetch("/api/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((addedData) => {
        setData([...data, addedData]);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error adding images:", error);
      });
  };


  
const handleDelete = (id) => {
  // Send a DELETE request to the server to remove the blog post
  fetch(`/api/images/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => {
      // Remove the deleted blog post from the state
      setData(data.filter((item) => item.id !== id));
    })
    .catch((error) => {
      console.error("Error deleting images:", error);
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
    
       <Button onClick={() => setAddModalOpen(true)}>Add New</Button>
     
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={GalleryColumn.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row.id} 
      />
      <AddNewModal
        open={isAddModalOpen}
        onSubmit={handleAdd}
        onClose={() => setAddModalOpen(false)}
      />
    </div>
  );
};

export default Datatable;
