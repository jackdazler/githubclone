import React, { useState, useEffect, Fragment } from "react";
import CpCard from "../components/cp-card/CpCard";
import SecondaryHeader from "../components/cp-header/seconday-header/SecondayHeader";
// import { getIssueData } from "../components/cp-card/cpcard_mock";
const Home = () => {
  const [data, setData] = useState();
  const [page,setPage] = useState(10);
  
  const fetchData = ()=>{
     try {
        let apiHeader = new Headers();
        apiHeader.append('Content-Type', 'application/json');
        fetch(`https://api.github.com/repos/facebook/react/issues`, {
          method: 'GET',
          headers: apiHeader,
        })
          .then((response) => response.json())
          .then((result) => {
            if(result.length>0)
            setData(result);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      } catch (err) {
        console.log(err);
      }
    }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    function handleScrollEvent() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
         setPage((page+10)%data.length);
      }
    }
  
    window.addEventListener('scroll', handleScrollEvent)
  
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    }
  }, [data,page])
 
  return (
    <>
      <SecondaryHeader />
      {data && data?.length > 0 &&
        data.slice(0,page).map((val) => (
          <React.Fragment key={'K'+val.id}>
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
