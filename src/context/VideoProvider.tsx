import React, { useState, ReactNode } from "react";
import { VideoContext } from "./VideoContext";

export const VideoProvider = ({ children }: { children: ReactNode }) => {
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);

  return (
    <VideoContext.Provider value={{ currentPlaying, setCurrentPlaying }}>
      {children}
    </VideoContext.Provider>
  );
};
