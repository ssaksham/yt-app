import React, { useState, useEffect } from "react";
import SeachBar from "./SeachBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideo from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideo("Dr Vivek Bindra");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SeachBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="eleven wide column">
          <VideoDetail video={selectedVideo} />
        </div>
        <div className="five wide column">
          <VideoList
            onVideoSelect={(video) => setSelectedVideo(video)}
            videos={videos}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
