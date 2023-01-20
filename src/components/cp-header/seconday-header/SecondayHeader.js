import React from "react";
import styleSecondayHeader from "./secondayHeader.module.scss";
const SecondayHeader = () => {
  return (
    <div className={`${styleSecondayHeader["cp-sec-header"]} container`}>
      <div className={styleSecondayHeader["head-wrap"]}>
        <ul className={styleSecondayHeader["left-wrap"]}>
          <li className={`${styleSecondayHeader["status"]}`}>
            <span className="icon-status"></span>
          </li>
          <li className={styleSecondayHeader["status-open"]}>625 open</li>
          <li className={styleSecondayHeader["status-done"]}>
            <span
              className={`${styleSecondayHeader["icon-done"]} icon-done`}
            ></span>{" "}
            10,104 closed
          </li>
        </ul>
        <ul className={styleSecondayHeader["right-wrap"]}>
          <li className={`${styleSecondayHeader["nav-link"]} `}>
            Author
            <span
              span
              className={`${styleSecondayHeader["icon-down"]} icon-down`}
            ></span>
          </li>

          <li className={styleSecondayHeader["nav-link"]}>
            Label
            <span
              span
              className={`${styleSecondayHeader["icon-down"]} icon-down`}
            ></span>
          </li>
          <div className={styleSecondayHeader["nav-link"]}>
            Projects
            <span
              span
              className={`${styleSecondayHeader["icon-down"]} icon-down`}
            ></span>
          </div>
          <li className={styleSecondayHeader["nav-link"]}>
            Milestones
            <span
              span
              className={`${styleSecondayHeader["icon-down"]} icon-down`}
            ></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SecondayHeader;
