import React from 'react';
import Slider from "react-slick";
import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './HeroCarousel.module.css';

// Static image from assets
import orderManagementImage from '../../assets/images/forecastingImage.jpg';
import forecastingImage from '../../assets/images/forecastingImage.jpg';
import reorderImage from '../../assets/images/forecastingImage.jpg';
import dataInputImage from '../../assets/images/forecastingImage.jpg';
import offlineSupportImage from '../../assets/images/forecastingImage.jpg';
import dashboardImage from '../../assets/images/forecastingImage.jpg';


const carouselItems = [
  {
    title: "Digitized Order Management",
    description: "Empower distributors to manage and process orders seamlessly with a mobile-first experience.",
    image: orderManagementImage
  },
  {
    title: "Smart Sales Forecasting",
    description: "Predict demand using past order trends, seasonal insights, and event-based spikes—optimized for distributors.",
    image: forecastingImage
  },
  {
    title: "Instant Reorder Suggestions",
    description: "Automate reorder alerts based on stock levels and predicted demand—no guesswork, just action.",
    image: reorderImage
  },
  {
    title: "Flexible Data Handling",
    description: "Upload sales and stock data via files or input manually to train models tailored to your product lines.",
    image: dataInputImage
  },
  {
    title: "Works Offline & Online",
    description: "Designed for field reps and rural distributors—access critical features even without a stable connection.",
    image: offlineSupportImage
  },
  {
    title: "Clean & Intuitive Dashboard",
    description: "Modern UI that simplifies workflows, helps track performance, and reduces operational friction.",
    image: dashboardImage
  }
];


const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
  };

  return (
    <Box className={styles.carouselContainer}>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <Box key={index} sx={{ position: 'relative' }}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.carouselImage}
            />

            <Box className={styles.carouselTextBox}>
              <Typography className={styles.carouselTitle} variant="h6">
                {item.title}
              </Typography>
              <Typography className={styles.carouselDescription} variant="body2">
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroCarousel;
