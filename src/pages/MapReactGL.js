import ReactMapGL, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-east-1:ee42c2bd-b6a5-4ab8-9e90-ea1cbda55374",
});

export default function MapReactGL() {

    const [viewport, setViewport] = useState({
        longitude: -122.45,
        latitude: 37.78,
        zoom: 5,
        mapboxApiAccessToken: "pk.eyJ1IjoiZXlhZ2VyMTciLCJhIjoiY2tvejVjeXMxMHJuMTJubGQyeXVzMjVpdyJ9.7k0GYXBDfDHC-HPrW3VKcQ"
    });

    const [demoAircraftLat, setDemoAircraftLat ] = useState(37.78);
    const [demoAircraftLon, setDemoAircraftLon] = useState(-122.41)

    useEffect(() => {
        setInterval(() => {
            setDemoAircraftLat(demoAircraftLat => demoAircraftLat+.01);
            setDemoAircraftLon(demoAircraftLon => demoAircraftLon+.01)
        }, 1000);
    }, []);

    return (
        <ReactMapGL {...viewport} width="100vw" height="100vh" onViewportChange={setViewport}>
            <Marker latitude={demoAircraftLat} longitude={demoAircraftLon} offsetLeft={-20} offsetTop={-10}>
            <div>You are here</div>
            </Marker>
        </ReactMapGL>
    );
}
