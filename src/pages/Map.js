import React, { useState, useRef, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import '../staticfiles/Map.css'
 
mapboxgl.accessToken = "pk.eyJ1IjoiZXlhZ2VyMTciLCJhIjoiY2tvejVjeXMxMHJuMTJubGQyeXVzMjVpdyJ9.7k0GYXBDfDHC-HPrW3VKcQ"

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  /*const [viewport, setViewport] = useState({
    width: 1400,
    height: 1400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    mapboxApiAccessToken: "pk.eyJ1IjoiZXlhZ2VyMTciLCJhIjoiY2tvejVjeXMxMHJuMTJubGQyeXVzMjVpdyJ9.7k0GYXBDfDHC-HPrW3VKcQ"
  });*/

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

  })

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}