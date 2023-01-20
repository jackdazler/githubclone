import React, { useState, useEffect, Fragment } from "react";
import CpCard from "../components/cp-card/CpCard";
import SecondaryHeader from "../components/cp-header/seconday-header/SecondayHeader";
import { getIssueData } from "../components/cp-card/cpcard_mock";
const Home = () => {
  const [data, setData] = useState([{}]);
  console.log(data);
  useEffect(() => {
    setData(getIssueData());
  }, []);
  return (
    <>
      <SecondaryHeader />
      {data && data.length > 0 &&
        data.map((val) => (
          <React.Fragment key={val.id}>
            <CpCard
              title={val.title}
              userData={val.user}
              labelData={val.labels}
              bugId={val.number}
              createdDate={val.created_at}
              commentNumber={val.comments}
            />
          </React.Fragment>
        ))}
    </>
  );
};

export default Home;
