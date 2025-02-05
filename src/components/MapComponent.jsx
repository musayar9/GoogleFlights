import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  return (
   
      <MapContainer
        center={[41.0082, 28.9784]}
        zoom={6}
        style={{ height: "300px", width: "100%", borderRadius: "12px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[41.0082, 28.9784]}>
          <Popup>İstanbul</Popup>
        </Marker>
      </MapContainer>

  );
};

export default MapComponent;
