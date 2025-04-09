import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './FAQBox.module.css'; // Import CSS module

const FAQBox = () => {
  return (
    <Box className={styles.faqContainer}>
      <Typography variant="h4" className={styles.title}>
        Common Issues & FAQs
      </Typography>

      {/* FAQ Accordion Items */}
      <Accordion className={styles.accordionItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.question}>What format is required?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.answer}>
            We support CSV and JSON file formats for uploading training data. Ensure that your file follows the required structure for smooth training.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.accordionItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.question}>Why is my file upload failing?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.answer}>
            Common reasons include unsupported file formats, large file size, or corrupted data. Make sure the file is in the correct format and within the size limit.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.accordionItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={styles.question}>How long does training take?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.answer}>
            The time it takes to train the model depends on the size of the dataset and the model's complexity. Typically, training could take anywhere from a few minutes to a few hours.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQBox;
