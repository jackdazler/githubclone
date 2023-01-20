import React from "react";
import styleCard from "./cpcard.module.scss";
const CpCard = (props) => {
  return (
    <>
      <div className={`${styleCard["cp-card"]} container`}>
        <div className={styleCard["card-item"]}>
          <div className={styleCard["card-lhs"]}>
            <div className={styleCard["issue-status"]}>
              <span className="icon-status"></span>
            </div>
            <div className={styleCard["issue-details"]}>
              <h2 className={styleCard["issue-title"]}>{props.title}</h2>
            </div>
            {props.labelData &&
              props.labelData.length > 0 &&
              props.labelData.map((val) => (
                <React.Fragment key={val.id}>
                  {val.name && val.name.length > 0 && (
                    <div className={styleCard["issue-labels"]}>
                      <span className={styleCard["issue-tag"]}>{val.name}</span>
                    </div>
                  )}
                </React.Fragment>
              ))}

            <div className={styleCard["issue-timestamp"]}>
              <span className={styleCard["timestamp-desc"]}>
                #{props.bugId} opend 15 hours ago by {props.userData.login}
              </span>
            </div>
          </div>
          <div className={styleCard["card-rhs"]}>
            <div className={styleCard["profile"]}>
              <div className={styleCard["profile-wrap"]}>
                <img src={props.userData.avatar_url} alt="profile-img" />
              </div>
            </div>
            {props.commentNumber > 0 && (
              <div className={styleCard["comment"]}>
                <span className={styleCard["comment-icon"]}>
                  <span className="icon-comment"></span>
                </span>
                <span className={styleCard["comment-len"]}>
                  {props.commentNumber}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CpCard;
