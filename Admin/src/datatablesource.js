export const  GalleryColumn = [
  // imageUrl: String,
  // title: String,
  // description: String,
  // artist_name: String,
  // type: String,
  // artist_id: mongoose.Schema.Types.ObjectId,
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "imageUrl",
    headerName: "Image",
    width: 200,
    
  },
  {
    field: "title",
    headerName: "Image Name",
    width: 100,
  },

  {
    field: "artist_name",
    headerName: "Artist Name",
    width: 100,
  },
  {
    field: "description",
    headerName: "Image Description",
    width: 250,
  },
  {
    field: "type",
    headerName: "Type",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const  PostColumn = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "image",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "title",
    headerName: "Title",
    width: 100,
  },

  {
    field: "description",
    headerName: "Description",
    width: 100,
  },
  {
    field: "CreatedAt",
    headerName: "Created At",
    width: 250,
  },
 
];

export const  EducationColumn = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "image",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "imageName",
    headerName: "Image Name",
    width: 100,
  },

  {
    field: "artist",
    headerName: "Artist Name",
    width: 100,
  },
  {
    field: "description",
    headerName: "Image Description",
    width: 250,
  },
  {
    field: "type",
    headerName: "Type",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];


export const  ResearchColumn = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 100,
  },

  {
    field: "author",
    headerName: "Author Name",
    width: 100,
  },
  {
    field: "pulicationdate",
    headerName: "Pulication Date",
    width: 100,
  },
  {
    field: "Summary",
    headerName: "Summary",
    width: 250,
  },
  {
    field: "fileURL",
    headerName: "File URL",
    width: 250,
  },{
    field: "ImageURL",
    headerName: "Image URL",
    width: 100,
  },
  {
    field: "Postdate",
    headerName: "Post Date",
    width: 250,
  },

];

export const  EventColumn = [
  { field: "id", headerName: "ID", width: 70 },
  
  {
    field: "title",
    headerName: "Title",
    width: 100,
  },

  {
    field: "date",
    headerName: "Date",
    width: 100,
  },
  {
    field: "description",
    headerName: "Image Description",
    width: 250,
  },{
    field: "location",
    headerName: "Location",
    width: 250,
  },


];


//temporary data
export const userRows = [
  {
    id: 1,
    artist: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    imageName: "snow",
    description: 35,
  },
  {
    id: 2,
    artist: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    imageName: "snow",
    description: 35,
  },
  {
    id: 3,
    artist: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    imageName: "snow",
    description: 35,
  },
  {
    id: 4,
    artist: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    imageName: "snow",
    description: 35,
  },
  {
    id: 5,
    artist: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    imageName: "snow",
    description: 35,
  },
  {
    id: 6,
    artist: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    imageName: "snow",
    description: 35,
  },
  {
    id: 7,
    artist: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    imageName: "snow",
    description: 35,
  },
  {
    id: 8,
    artist: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    imageName: "snow",
    description: 35,
  },
  {
    id: 9,
    artist: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    imageName: "snow",
    description: 35,
  },
  {
    id: 10,
    artist: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    imageName: "snow",
    description: 35,
  },
];
