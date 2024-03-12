/* App.jsx */
import React, { useState, useEffect } from "react";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import Description from "../Description/Description";
import style from "./App.module.css";

const App = () => {
  const initialState = { good: 0, neutral: 0, bad: 0 };
  const [feedback, setFeedback] = useState(initialState);

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem("feedback"));
    if (storedFeedback) {
      setFeedback(storedFeedback);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback(initialState);
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const hasFeedback = totalFeedback > 0;

  return (
    <div className={style.container}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        hasFeedback={hasFeedback}
      />
      {hasFeedback && (
        <>
          <Feedback feedback={feedback} totalFeedback={totalFeedback} />
        </>
      )}
      {!hasFeedback && <Notification message="No feedback yet." />}
    </div>
  );
};

export default App;
