"use client";
import React, { memo, useEffect, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GoogleMapsComponent = ({ coordinatesArray, height,className="h-full"}) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && coordinatesArray.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      coordinatesArray.forEach((location) => {
        bounds.extend(
          new window.google.maps.LatLng(location.lat, location.lng)
        );
      });

      // Set the bounds and then adjust the zoom level
      mapRef.current.fitBounds(bounds);

      // Ensure the zoom level does not exceed 10 or 15
      const map = mapRef.current;
      const maxZoom = 15; // Set your desired max zoom level
      map.addListener("bounds_changed", () => {
        const currentZoom = map.getZoom();
        if (currentZoom > maxZoom) {
          map.setZoom(maxZoom);
        }
      });

      // Also adjust the zoom level on initial load
      const adjustZoom = () => {
        const currentZoom = map.getZoom();
        if (currentZoom > maxZoom) {
          map.setZoom(maxZoom);
        }
      };
      map.addListener("idle", adjustZoom);
    }
  }, [coordinatesArray]);

  return (
    <div  className={className} >
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={coordinatesArray[0] || { lat: 37.7048541, lng: -121.9315456 }}
          zoom={10} // Initial zoom level
          options={{ streetViewControl: false }} // Disable Pegman
          onLoad={(map) => (mapRef.current = map)} // Set map reference
        >
          {coordinatesArray.map((location, index) => (
            <Marker key={index} position={location} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default memo(GoogleMapsComponent);
