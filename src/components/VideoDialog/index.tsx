import { VIDEO_URL } from '@constants/video-url';

export const VideoDialog: React.FC = () => {
  return (
    <video controls autoPlay preload="auto" width="800" height="600">
      <source src={VIDEO_URL} type="video/mp4" />
      The browser does not support this video stream format.
    </video>
  );
};
