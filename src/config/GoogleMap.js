import React from "react";
import GoogleMapReact from "google-map-react";

export default function GoogleMap({ children, onClick, centerLocation }) {
  const defaultProps = {
    center: {
      lat: 60.98267,
      lng: 25.66151,
    },
    zoom: 11,
  };
  return (
    <>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.GOOGLE_MAP_API_KEY}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={centerLocation}
        onClick={onClick}>
        {children}
      </GoogleMapReact>
    </>
  );
}
