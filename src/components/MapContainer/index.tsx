import { memo, useState } from 'react';
import { Map, Marker, FullscreenControl, ScaleControl, NavigationControl, Popup } from 'react-map-gl';

import Loading from '@components/Loading';
import { COORDINATES_INITIAL_VIEW, COORDINATES_MARKERS } from '@constants/coordinates-map';
import { theme } from '@theme/theme';

import { Coordinates } from './interfaces';

const MapContainer: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [popupInfo, setPopupInfo] = useState<Coordinates | null>(null);

  const handleLoadMap = (): void => {
    setIsLoading(false);
  };

  const handleRenderMap = (): void => {
    if (!isLoading) {
      return;
    }
    setIsLoading(false);
  };

  const handleClickMarker = (marker: Coordinates): void => {
    setPopupInfo(marker);
  };

  const handleClosePopup = (): void => {
    setPopupInfo(null);
  };

  return (
    <>
      {isLoading && <Loading width={50} height={50} margin="50px auto" />}
      <Map
        onLoad={handleLoadMap}
        onRender={handleRenderMap}
        reuseMaps={true}
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

        {COORDINATES_MARKERS.map(({ longitude, latitude, country }, index) => {
          return (
            <Marker
              key={index}
              longitude={longitude}
              latitude={latitude}
              color={theme.colors.primary}
              onClick={(): void => handleClickMarker({ longitude, latitude, country })}
            />
          );
        })}

        {popupInfo && (
          <Popup
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeButton={true}
            closeOnClick={false}
            onClose={handleClosePopup}
            anchor="top"
            offset={4}
            maxWidth="max-content"
          >
            <h4>Country: {popupInfo.country}</h4>
            <div>Longitude: {popupInfo.longitude}</div>
            <div>Latitude: {popupInfo.latitude}</div>
          </Popup>
        )}
      </Map>
    </>
  );
};

export default memo(MapContainer);
