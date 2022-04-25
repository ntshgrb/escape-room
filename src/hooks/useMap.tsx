import { useEffect, useState, MutableRefObject } from 'react';
import leaflet from 'leaflet';
import { Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Address } from 'types/address';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, address: Address): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: address.latitude,
          lng: address.longitude,
        },
        zoom: address.zoom,
      });

      leaflet
        .tileLayer(
          'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
          },
        )
        .addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map, address]);
  return map;
}

export default useMap;
