import React from "react";
import styles from "./SampleDataPreview.module.css";
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const sampleRows = [
  { date: "2024-01-01", product_id: 101, units_sold: 25, price: 19.99 },
  { date: "2024-01-02", product_id: 101, units_sold: 30, price: 19.99 },
  { date: "2024-01-03", product_id: 102, units_sold: 15, price: 29.99 },
];

const SampleDataPreview = () => {
  return (
    <div className={styles.previewWrapper}>
      <Typography variant="h6" className={styles.previewTitle}>
        Sample Data Format
      </Typography>
      <Typography variant="body2" className={styles.previewText}>
        Your CSV/JSON file should include the following columns:
        <strong> date, product_id, units_sold, price</strong>
      </Typography>

      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Product ID</TableCell>
              <TableCell>Units Sold</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleRows.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.product_id}</TableCell>
                <TableCell>{row.units_sold}</TableCell>
                <TableCell>${row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="outlined"
        className={styles.downloadButton}
        href="/sample/sample_data.csv"
        download
      >
        Download Sample File
      </Button>
    </div>
  );
};

export default SampleDataPreview;
