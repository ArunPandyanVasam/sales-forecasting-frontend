import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import styles from './FAQBox.module.css'; // Import CSS module

const faqData = [
  {
    question: "What format is required?",
    answer:
      "We support CSV and JSON file formats for uploading training data. Ensure that your file follows the required structure for smooth training."
  },
  {
    question: "Why is my file upload failing?",
    answer:
      "Common reasons include unsupported file formats, large file size, or corrupted data. Make sure the file is in the correct format and within the size limit."
  },
  {
    question: "How long does training take?",
    answer:
      "The time it takes to train the model depends on the size of the dataset and the model's complexity. Typically, training could take anywhere from a few minutes to a few hours."
  }
];

const FAQBox = () => {
  return (
    <Box className={styles.faqContainer}>
      <Typography variant="h4" className={styles.title}>
        Common Issues & FAQs
      </Typography>

      {faqData.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Accordion className={styles.accordionItem}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <Typography className={styles.question}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.answer}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </motion.div>
      ))}
    </Box>
  );
};

export default FAQBox;
