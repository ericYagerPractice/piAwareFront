import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import ReactMapGL, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import React, { useState } from 'react';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
 
export default function MapReactGL() {

    const [viewport, setViewport] = React.useState({
        longitude: -122.45,
        latitude: 37.78,
        zoom: 14,
        mapboxApiAccessToken: "pk.eyJ1IjoiZXlhZ2VyMTciLCJhIjoiY2tvejVjeXMxMHJuMTJubGQyeXVzMjVpdyJ9.7k0GYXBDfDHC-HPrW3VKcQ"
      });
      return (
        <ReactMapGL {...viewport} width="100vw" height="100vh" onViewportChange={setViewport}>
          <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
            <div>You are here</div>
          </Marker>
        </ReactMapGL>
      );
}
