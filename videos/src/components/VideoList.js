import React from "react";
import VideoItem from "./VideoItem";
export default function VideoList({ videos, onVideoSelect }) {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      ></VideoItem>
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
}
