"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    YT: typeof YT | undefined;
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
  const playerRef = useRef<YT.Player | null>(null);

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
          onReady: (event) => {
            const target = event.target as YT.Player;

            target.setPlaybackQuality("hd1080");
            target.playVideo();

            const interval = setInterval(() => {
              if (target.getCurrentTime() >= end) {
                target.seekTo(start, true);
                target.setPlaybackQuality("hd1080"); // re-request
              }
            }, 200);
          },
        },
      });
    };
  }, [videoId, start, end]);

  return <div id="yt-player" style={{ width: "100%", height: "100%" }} />;
};

export default YouTubeLoop;
