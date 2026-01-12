"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const YouTubeLoop = ({
  videoId,
  start,
  end,
}: {
  videoId: string;
  start: number;
  end: number;
}) => {
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          start,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();

            // Start interval to loop
            const interval = setInterval(() => {
              const currentTime = event.target.getCurrentTime();
              if (currentTime >= end) {
                event.target.seekTo(start);
              }
            }, 200); // check every 200ms

            // Cleanup on unmount
            return () => clearInterval(interval);
          },
        },
        onReady: (event: any) => {
            event.target.setPlaybackQuality("hd1080"); // suggest 1080p
            event.target.playVideo();
        },
      });
    };
  }, [videoId, start, end]);

  return <div id="yt-player" style={{ width: "100%", height: "100%" }} />;
};

export default YouTubeLoop;
