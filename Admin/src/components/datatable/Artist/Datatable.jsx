import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { ArtistColumn } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import  AddArtistModal from "./AddArtistModal";
import { Button } from "@mui/material";
import "./AddArtistModal.scss"
import ArtistEditForm from "./EditArtistmodal";


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
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [artistId,setArtisId]=useState("")

  const handleAddModalOpen = () => {
    console.log("handleAddModalOpen");
    setAddModalOpen(true);
  };


  const handleEdit=(id)=>{

      setEditModalOpen(true);
      setArtisId(id);

      console.log(`current id is ${id}`)
       
  }


  const handleAddArtist = (newArtist) => {
   
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
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error adding artist:", error);
      });
  };


  
const handleDelete = (id) => {
 
  fetch(`/api/artists/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => {
  
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
  
              <div className="viewButton" onClick={()=>handleEdit(params.row.id)}>Edit</div>
          
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
    
      <Button className="link" onClick={handleAddModalOpen}>
          Add New Artist
        </Button>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={ArtistColumn.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
      <AddArtistModal
        open={isAddModalOpen}
        onAdd={handleAddArtist}
      />
      <ArtistEditForm open={isEditModalOpen} onClose={()=>setEditModalOpen(false)}  artistId={artistId}/>
    </div>
  );
};

export default Datatable;
