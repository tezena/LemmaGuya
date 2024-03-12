import React, { useState,useEffect } from "react";
import { Modal, Button, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"
import "./AddArtistModal.scss"; 
import { Box } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";









const ArtistEditForm = ({ open, onClose,artistId}) => {
  
    


  const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const ArtistSchema = yup.object().shape({
    name: yup.string().required("required"),
    imageUrl: yup.string().required("required"),
    bio: yup.string().required("required"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    address: yup.string().required("required"),
   
  });
 
  
  const [initialValues,setIntialVlues] =useState({})
  const [dataFetched,setDataFetched]=useState(false)

  useEffect(async () => {
    try {
      const response = await axios.get(`http://localhost:5001/api/artists/${artistId}`);
     
      
      setIntialVlues({
        name: response.data.name,
        imageUrl: response.data.imageUrl,
        bio: response.data.bio,
        phone: response.data.phone,
        location: response.data.location,
      });

      setDataFetched(true)
    } catch (error) {
      console.log(error.message);
    }
  }, [artistId]);
  


 
  





  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values,{resetForm}) => {

    console.log(`values are ${values.name}`)
    values.preventDefault()
     
     try{

     
   const response = await axios.put(`http://localhost:5001/api/artists/${artistId}`,values).then(res=>{
          console.log(res.data)

          setIntialVlues({
            name: res.data.name,
            imageUrl: res.data.imageUrl,
            bio: res.data.bio,
            phone: res.data.phone,
            location: res.data.location,
          });

          setDataFetched(false);

          resetForm();
          
          console.log(`response is : ${response.data}`)
    })}catch(e){
        console.log(e)
  
    }
         
    
    console.log(values);
  };

  return (
    <Modal open={open} onClose={onClose} className="addArtistModal">

      <div className="modalContent">
      <div className="closeIcon" onClick={onClose}>
          <CloseIcon />
        </div>
      

        <Box m="20px">
        <h2>Edit Artist</h2>
     
      { dataFetched && <Formik
        onSubmit={(values, { resetForm }) => handleFormSubmit(values, { resetForm })}
        initialValues={initialValues}
        validationSchema={ArtistSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          onSubmit,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={onSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Full Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
             
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Image url"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.bio}
                name="imageUrl"
                error={!!touched.imageUrl && !!errors.imageUrl}
                helperText={touched.imageUrl && errors.imageUrl}
                sx={{ gridColumn: "span 4" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Bio"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.bio}
                name="Bio"
                error={!!touched.bio && !!errors.bio}
                helperText={touched.bio && errors.bio}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.location}
                name="locaation"
                error={!!touched.location && !!errors.location}
                helperText={touched.location && errors.location}
                sx={{ gridColumn: "span 4" }}
              />
             
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Save Changes
              </Button>
            </Box>
          </form>
        )}
      </Formik>}
    </Box>



        </div>
       
    </Modal>
  );
};

export default ArtistEditForm;











