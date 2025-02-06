import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Button } from "@mui/material";

const MapComponent = () => {
  return (
    <MapContainer
      center={[41.0082, 28.9784]}
      zoom={6}
      style={{
        height: "300px",
        width: "100%",
        borderRadius: "12px",
        position: "relative",
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[41.0082, 28.9784]}>
        <Popup>İstanbul</Popup>
      </Marker>
      <Button
        sx={{
          backgroundColor: "#ffffff",
          paddingRight: 2,
          paddingLeft: 2,
          borderRadius: 15,
          color: "#007bff",
          position: "absolute",
          zIndex: 1000,
          top:120,
          left: {xs:100, md:500},
          fontSize: 14,
          textTransform: "capitalize",
          "&:hover": {
            backgroundColor: "#007bff",
            color: "#ffffff",
            transform: "scale(1.05)", // Hafif büyüme efekti
          },
        }}
      >
        Discover destinations
      </Button>
    </MapContainer>
  );
};

export default MapComponent;
