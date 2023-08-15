import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { GalleryColumn, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {  
      fetch("/api/getimages")
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Update the state with fetched data
      });
  }, []);
console.log(data)
const handleDelete = (id) => {
  // Send a DELETE request to the server to remove the image
  fetch(`/api/images/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => {
      // Remove the deleted image from the state
      setData(data.filter((item) => item.id !== id));
    })
    .catch((error) => {
      console.error("Error deleting image:", error);
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
        <Link to="/images/new" className="link">
          Add New 
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={GalleryColumn.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
