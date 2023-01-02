import { VIDEO_URL } from '@constants/video-url';

import { Source, Video } from './styles';

export const VideoDialog: React.FC = () => {
  return (
    <Video controls preload="auto" autoPlay width="800" height="600">
      <Source src={VIDEO_URL} type="video/mp4" />
      The browser does not support this video stream format.
    </Video>
  );
};
