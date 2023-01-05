import { memo } from 'react';
import { Map, Marker, FullscreenControl, ScaleControl, NavigationControl } from 'react-map-gl';

import { COORDINATES_INITIAL_VIEW, COORDINATES_MARKERS } from '@constants/coordinates-map';
import { theme } from '@theme/theme';

const MapContainer: React.FC = () => {
  return (
    <Map
      reuseMaps={false}
      initialViewState={{
        bounds: COORDINATES_INITIAL_VIEW
      }}
      style={{ width: '100%', height: 460 }}
      mapStyle="mapbox://styles/mapbox/light-v11"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      <FullscreenControl />
      <ScaleControl position="bottom-right" unit="metric" />
      <NavigationControl visualizePitch={true} showCompass={true} showZoom={true} />

      {COORDINATES_MARKERS.map(({ longitude, latitude }, index) => {
        return <Marker key={index} longitude={longitude} latitude={latitude} color={theme.colors.primary} />;
      })}
    </Map>
  );
};

export default memo(MapContainer);