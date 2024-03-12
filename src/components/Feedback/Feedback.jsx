/* Feedback.jsx */
import React from "react";
import style from "./Feedback.module.css";
const Feedback = ({ feedback, totalFeedback }) => {
  const positivePercentage = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  return (
    <div>
      <h2>Feedback Statistics</h2>
      <p className={style.pFeed}>Good: {feedback.good}</p>
      <p className={style.pFeed}>Neutral: {feedback.neutral}</p>
      <p className={style.pFeed}>Bad: {feedback.bad}</p>
      <p className={style.pFeed}>Total: {totalFeedback}</p>
      <p className={style.pFeed}>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
