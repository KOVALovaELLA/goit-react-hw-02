/* Description.jsx */
import React from "react";
import Styles from "./Description.module.css";
const Description = () => {
  return (
    <div>
      <h1 className={Styles.h1}>Sip Happens Café</h1>
      <p className={Styles.p}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
