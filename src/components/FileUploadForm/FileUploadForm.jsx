import React, { useState } from 'react';
import { Button, Typography, Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import styles from './FileUploadForm.module.css';

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
      const response = await axios.post('http://127.0.0.1:5000/api/train_model', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200 && response.data?.message) {
        const backendMessage = response.data.message;
        onModelTrained(backendMessage); // pass backend message to parent
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('File upload failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className={styles.fileInputContainer}>
      <Typography variant="h6" className={styles.title}>
        Upload Your Training File
      </Typography>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="file-input"
        className={styles.fileInput}
      />
      <label htmlFor="file-input" className={styles.chooseFileLabel}>
        <Button variant="outlined" component="span" color="primary" className={styles.chooseFileButton}>
          Choose File
        </Button>
      </label>

      {file && (
        <Typography variant="body2" color="textSecondary" className={styles.fileNameText}>
          {file.name}
        </Typography>
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={handleFileUpload}
        disabled={loading || !file}
        className={styles.uploadButton}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Upload and Train Model'}
      </Button>
    </Box>
  );
};

export default FileUploadForm;
