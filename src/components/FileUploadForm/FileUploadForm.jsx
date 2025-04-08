import React, { useState } from 'react';
import { Button, Typography, Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import { styled } from '@mui/material/styles';

// Styled components for better control
const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: 8,
  boxShadow: theme.shadows[5],
  maxWidth: 400,
  margin: 'auto',
  textAlign: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 4),
  fontWeight: 600,
  fontSize: '1rem',
  borderRadius: 30,
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
}));

const FileUploadForm = ({ onModelTrained }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) return alert('Please select a file to upload.');

    setLoading(true);

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledBox>
      <StyledTypography variant="h6">Upload Your Training File</StyledTypography>
      <input
        type="file"
        onChange={handleFileChange}
        style={{
          display: 'none',
        }}
        id="file-input"
      />
      <label htmlFor="file-input">
        <Button variant="outlined" component="span" color="primary" fullWidth>
          Choose File
        </Button>
      </label>

      {file && (
        <Typography variant="body2" color="textSecondary" mt={2}>
          {file.name}
        </Typography>
      )}

      <StyledButton
        variant="contained"
        color="primary"
        onClick={handleFileUpload}
        disabled={loading || !file}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Upload and Train Model'}
      </StyledButton>
    </StyledBox>
  );
};

export default FileUploadForm;
