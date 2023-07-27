import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import { useSelector } from 'react-redux';

function OSMMap() {
  const form = useSelector((state) => state.form);

  return (
    <MapContainer
      key={form.country.toString()}
      center={form.country}
      zoom={4}
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: 0,
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={form?.country}>
        <Popup>
          Lat:
          {' '}
          {form?.country[0]}
          , Long:
          {' '}
          {form?.country[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default OSMMap;
