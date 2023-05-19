import React from "react";
import cl from "./ProgressBar.module.scss";
import PropTypes from "prop-types";

const ProgressBar = ({ progress }) => {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className={cl.cont}>
      <div className={cl.title}>
        <h3>Kettik in numbers</h3>
        <p>6 years with Kettik this</p>
      </div>
      <section className={cl.heightBar}>
        <div className={cl.graph}>
          <span className={cl.absolute}>
            <h5>5670</h5>
          </span>
          <svg
            className={cl.circleProgressBar}
            width="240"
            height="240"
            viewBox="0 0 240 240"
          >
            <circle
              className={cl.circleBackground}
              cx="120"
              cy="120"
              r={radius}
            />
            <circle
              className={cl.circleProgress}
              cx="120"
              cy="120"
              r={radius}
              strokeDasharray={390}
              strokeDashoffset={3}
            />
          </svg>
          <h4>Lorem, ipsum dolor.</h4>
        </div>
        <div className={cl.graph}>
          <span className={cl.absolute}>
            <h5>65150</h5>
          </span>
          <svg
            className={cl.circleProgressBar}
            width="240"
            height="240"
            viewBox="0 0 240 240"
          >
            <circle
              className={cl.circleBackground}
              cx="120"
              cy="120"
              r={radius}
            />
            <circle
              className={cl.circleProgress}
              cx="120"
              cy="120"
              r={radius}
              strokeDasharray={360}
              strokeDashoffset={offset}
            />
          </svg>
          <h4>Lorem ipsum dolor sit.</h4>
        </div>
        <div className={cl.graph}>
          <span className={cl.absolute}>
            <h5>50</h5>
          </span>
          <svg
            className={cl.circleProgressBar}
            width="240"
            height="240"
            viewBox="0 0 240 240"
          >
            <circle
              className={cl.circleBackground}
              cx="120"
              cy="120"
              r={radius}
            />
            <circle
              className={cl.circleProgress}
              cx="120"
              cy="120"
              r={radius}
              strokeDasharray={230}
              strokeDashoffset={offset}
            />
          </svg>
          <h4>Lorem ipsum dolor sit.</h4>
        </div>
        <div className={cl.graph}>
          <span className={cl.absolute}>
            <h5>250</h5>
          </span>
          <svg
            className={cl.circleProgressBar}
            width="240"
            height="240"
            viewBox="0 0 240 240"
          >
            <circle
              className={cl.circleBackground}
              cx="120"
              cy="120"
              r={radius}
            />
            <circle
              className={cl.circleProgress}
              cx="120"
              cy="120"
              r={radius}
              strokeDasharray={190}
              strokeDashoffset={offset}
            />
          </svg>
          <h4>Lorem ipsum dolor sit.</h4>
        </div>
      </section>
    </div>
  );
};
ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
