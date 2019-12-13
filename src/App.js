import React, {useState} from 'react';
import ReactMapGl, {Marker} from "react-map-gl";
import * as shopData from "./shopData.json";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export default function App() {
const [viewport, setViewport] =  useState({
  latitude: 48.864829,
  longitude: 2.3502993000000005,
  width: "100vw",
  height: "80vh",
  zoom: 10
});

  return (
    <div>
      <ReactMapGl {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle = "mapbox://styles/emmanuelreure/ck43xnttl00xv1clb8brueg9p"
      onViewportChange={viewport => {
        setViewport(viewport);

      }}

      >
      {shopData.shops.map((shop) => (

        <Marker key={shop.properties.SHOP_ID}
        latitude={shop.geometry.coordinates[0]}
        longitude={shop.geometry.coordinates[1]}>
        <button class="marker-btn">
        <img src="/seedling-solid.svg"></img>
        </button>
     
         
        </Marker>
      ))}
      </ReactMapGl>
      
    </div>
  );
}


