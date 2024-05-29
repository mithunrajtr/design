import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import List from './List';

const Home = () => {

  const [videos, setVideos] = useState();

  useEffect( () =>{
    // Getting videos list
    async function getVideos(){
      let data = await fetch("https://react-test.aventusinformatics.com/api/feeds/get-videos")
      .then((res) => res.json());
      
      if(data?.status && data?.data?.count){
        let results = data?.data?.results?.data;
        setVideos(results);
      }

    }
    getVideos();
  }, []);

  return (
    <>
        <div className="navigationbar">
            <Navbar />
        </div>
        <div className='bottomSection'>
          <Sidebar />
          {videos?.length > 0 && <List videos={videos} />}
        </div>
    </>
  )
}   

export default Home