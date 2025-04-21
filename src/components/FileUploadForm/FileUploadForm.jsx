import React, { useState, useRef } from 'react';
import { Box, Typography, Button, CircularProgress, Snackbar, Alert, Paper } from '@mui/material';
import axios from 'axios';
import styles from './FileUploadForm.module.css';

const FileUploadPage = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert('Please select a file.');

    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://127.0.0.1:5000/api/train_model', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (res.status === 200 && res.data.message) {
        setSuccessMessage(res.data.message); //
        setSnackbarOpen(true);
        setFile(null);
        fileInputRef.current.value = null;
      }
    } catch (err) {
      console.error(err);
      alert('Training failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSnackbarClose = () => setSnackbarOpen(false);

  return (
    <Box className={styles.container}>
      <Paper elevation={6} className={styles.uploadBox}>

        <input
          type="file"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
          id="file-upload"
        />
        <label htmlFor="file-upload">
          <Button variant="outlined" component="span" className={styles.chooseBtn}>
            Choose File
          </Button>
        </label>

        {file && (
          <Typography className={styles.fileName}>
            Selected: {file.name}
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          disabled={loading || !file}
          onClick={handleUpload}
          className={styles.uploadBtn}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Upload & Train'}
        </Button>
      </Paper>

      <Snackbar open={snackbarOpen} autoHideDuration={4000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {successMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FileUploadPage;
