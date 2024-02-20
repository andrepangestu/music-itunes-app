import React, { useContext } from "react";
import { PlayIcon } from "./Icons";
import { VideoContext } from "../context/VideoContext";

interface VideoProps {
  urlImage: string;
  urlVideo: string;
  id: number;
}

const Video: React.FC<VideoProps> = (props) => {
  const { currentPlaying, setCurrentPlaying } = useContext(VideoContext);
  const isPlaying = currentPlaying === props.id;

  const playVideo = () => {
    if (currentPlaying && isPlaying) {
      setCurrentPlaying(null);
    } else {
      setCurrentPlaying(props.id);
    }
  };

  return (
    <>
      <div className="relative w-[100px] h-[100px]" onClick={playVideo}>
        <img
          src={props.urlImage || "https://placehold.co/100x100"}
          alt="Rought Water"
          height={100}
          width={100}
          className="rounded-xl h-[100px] w-[100px] object-cover"
        />
        <div
          className={`absolute top-[35%] w-[36] left-[32%]  ${
            isPlaying ? "hidden" : ""
          }`}
        >
          <PlayIcon />
        </div>
      </div>

      {isPlaying && (
        <video className="hidden" width="100" height={100} controls autoPlay>
          <source src={props.urlVideo} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      )}
    </>
  );
};

export default Video;
