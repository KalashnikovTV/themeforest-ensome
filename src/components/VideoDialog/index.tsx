import { useLayoutEffect, useRef } from 'react';

import { VIDEO_URL } from '@constants/video-url';

import { Source, Video } from './styles';

export const VideoDialog: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.3;
    }
  }, []);

  return (
    <Video ref={videoRef} controls preload="auto" autoPlay width="800" height="600">
      <Source src={VIDEO_URL} type="video/mp4" />
      The browser does not support this video stream format.
    </Video>
  );
};
