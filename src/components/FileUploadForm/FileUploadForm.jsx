import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import axios from 'axios';

const FileUploadForm = ({ onModelTrained }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) return alert('Please select a file to upload.');

    const formData = new FormData();
    formData.append('file', file);

    try {
      // Assuming your backend endpoint is '/train_model'
      const response = await axios.post('http://localhost:5000/train_model', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        onModelTrained(); // Notify parent that model has been trained
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('File upload failed. Please try again.');
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <input type="file" onChange={handleFileChange} />
      <Button variant="contained" color="primary" onClick={handleFileUpload} mt={2}>
        Upload and Train Model
      </Button>
    </Box>
  );
};

export default FileUploadForm;
