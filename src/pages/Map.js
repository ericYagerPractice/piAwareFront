import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';


export default function Map() {
  const [viewport, setViewport] = useState({
    width: 1400,
    height: 1400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    mapboxApiAccessToken: "pk.eyJ1IjoiZXlhZ2VyMTciLCJhIjoiY2tvejVjeXMxMHJuMTJubGQyeXVzMjVpdyJ9.7k0GYXBDfDHC-HPrW3VKcQ"
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}