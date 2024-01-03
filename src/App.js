import React from 'react';
import { useEffect } from 'react';
import MapLibreGL from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';



function Map() {
  useEffect(() => {
    const map = new MapLibreGL.Map({
      container: 'map',
      style: 'https://tiles.versatiles.org/styles/colorful.json',
      center: [8.5428242, 47.3669311],
      zoom: 13
    });

    map.on('style.load', () => {
      new MapLibreGL.Marker()
        .setLngLat([8.5428242, 47.3669311])
        .addTo(map);
    });
  }, []);
  return <div id="map" style={{ width: '100%', height: '100vh' }} />;
}

function App() {
  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default App;
