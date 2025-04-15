import React from "react";
import styles from "./WhyPredictSales.module.css";
import InsightsIcon from "@mui/icons-material/Insights";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import SavingsIcon from "@mui/icons-material/Savings";

const WhyPredictSales = () => {
  const benefits = [
    {
      icon: <InsightsIcon className={styles.icon} />,
      title: "Accurate Inventory Planning",
      description:
        "Avoid stockouts and overstocking by accurately forecasting product demand.",
    },
    {
      icon: <PsychologyAltIcon className={styles.icon} />,
      title: "Smarter Business Decisions",
      description:
        "Use predictive insights to align marketing, promotions, and staffing strategies.",
    },
    {
      icon: <ShoppingCartCheckoutIcon className={styles.icon} />,
      title: "Enhanced Customer Experience",
      description:
        "Keep customers satisfied by ensuring the right products are available when needed.",
    },
    {
      icon: <SavingsIcon className={styles.icon} />,
      title: "Cost Efficiency",
      description:
        "Reduce excess inventory, storage costs, and lost revenue due to poor planning.",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Why Predicting Sales Matters</h2>
        <p className={styles.tagline}>
          Forecasting sales isn’t just about numbers—it’s about optimizing operations, improving customer satisfaction, and driving smart growth.
        </p>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div className={styles.card} key={index}>
              {benefit.icon}
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPredictSales;
