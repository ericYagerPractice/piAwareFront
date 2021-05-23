// ES6
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
 
const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZXlhZ2VyMTciLCJhIjoiY2tvejVjeXMxMHJuMTJubGQyeXVzMjVpdyJ9.7k0GYXBDfDHC-HPrW3VKcQ"
});
 
export default function MapReactGL() {
    return(
        <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
            height: '100vh',
            width: '100vw'
        }}
        >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
        </Map>
    )
}
