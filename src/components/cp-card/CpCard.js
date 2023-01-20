import React from "react";
import styleCard from "./cpcard.module.scss";
const CpCard = () => (
  <div className={`${styleCard["cp-card"]} container`}>
    <div className={styleCard["card-item"]}>
      <div className={styleCard["card-lhs"]}>
        <div className={styleCard["issue-status"]}><span className='icon-status'></span></div>
        <div className={styleCard["issue-details"]}>
          <h2 className={styleCard["issue-title"]}>
            Bug: broken app when snamespaced tages in JSX
          </h2>
        </div>
        <div className={styleCard["issue-labels"]}>
          <span className={styleCard["issue-tag"]}>Status: Unconfitmed</span>
        </div>
        <div className={styleCard["issue-timestamp"]}>
          <span className={styleCard["timestamp-desc"]}>
            #22338 opend 15 hours ago by Abcd
          </span>
        </div>
      </div>
      <div className={styleCard["card-rhs"]}>
        <div className={styleCard["profile"]}>
          <div className={styleCard["profile-wrap"]}>
            <img
              src="https://avatars.githubusercontent.com/u/1500684?v=4"
              alt="profile-img"
            />
          </div>
        </div>
        <div className={styleCard["comment"]}>
          <span className={styleCard["comment-icon"]}><span className="icon-comment"></span></span>
          <span className={styleCard["comment-len"]}>4</span>
        </div>
      </div>
    </div>
  </div>
);

export default CpCard;
