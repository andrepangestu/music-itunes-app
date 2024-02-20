import { createContext } from "react";

type VideoContextType = {
  currentPlaying: number | null;
  setCurrentPlaying: (id: number | null) => void;
};

export const VideoContext = createContext<VideoContextType>({
  currentPlaying: null,
  setCurrentPlaying: () => {},
});
