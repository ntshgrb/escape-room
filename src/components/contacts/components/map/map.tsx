import useMap from "hooks/useMap";
import { useEffect, useRef } from "react";
import { Address } from '../../../../types/address';
import leaflet from 'leaflet';
import * as S from './map.styled';
import { DEFAULT_PIN, iconSize } from '../../../../const';

type MapProps = {
  address: Address,
}

function Map ({address}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, address);

  const defaultIcon = leaflet.icon({
    iconUrl: DEFAULT_PIN,
    iconSize: [iconSize.Width, iconSize.Height],
    iconAnchor: [iconSize.Width/2, iconSize.Height],
  });

  useEffect(() => {
    if (map) {
      leaflet
        .marker({
          lat: address.latitude,
          lng: address.longitude,
        }, {
          icon: defaultIcon,
        })
        .addTo(map);
    }
  }, [map, address, defaultIcon]);

  return (
    <S.Map
      ref={mapRef}>
    </S.Map>);
}

export default Map;

