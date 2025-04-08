import React from 'react';
import Slider from "react-slick";
import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './HeroCarousel.module.css';

// Importing static images from assets folder
import forecastingImage from '../../assets/images/forecasting.jpg';

const carouselItems = [
  {
    title: "Smart Sales Forecasting",
    description: "Leverage historical data and advanced algorithms to predict future sales.",
    image: forecastingImage
  },
  {
    title: "Flexible Data Input",
    description: "Upload your data through CSV/JSON files or manually enter it for training.",
    image: forecastingImage
  },
  {
    title: "Real-time Suggestions",
    description: "Receive real-time reorder recommendations based on accurate predictions.",
    image: forecastingImage
  },
  {
    title: "User-Friendly Interface",
    description: "Clean, responsive design suitable for all devices, enhancing your workflow.",
    image: forecastingImage
  }
];

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Optional: Hides arrows for a cleaner look
    fade: true, // Smooth fade transition between slides
  };

  return (
    <Box className={styles.carouselContainer}>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <Box key={index} sx={{ position: 'relative' }}>
            {/* Image with professional look */}
            <img
              src={item.image}
              alt={item.title}
              className={styles.carouselImage}
            />

            {/* Title and Description Text */}
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
