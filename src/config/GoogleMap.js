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
        bootstrapURLKeys={{ key: "AIzaSyBuPC-JrJ8gg5818O-sTiJShGY35s2OupE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={centerLocation}
        onClick={onClick}>
        {children}
      </GoogleMapReact>
    </>
  );
}
