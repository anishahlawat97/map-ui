import React, {useState} from "react";
import {MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import './Map.css'
import { connect } from "react-redux";
import { Icon } from "leaflet";
import { Typography } from "antd";
// import collect from '@turf/collect';
// import * as turf from '@turf/turf'


const mapStateToProps = (state) => ({
  latitude: state.latitude,
  longitude: state.longitude,
  currency: state.currency,
  speed: state.speed,
  distance: state.distance,
  volume: state.volume,
  timezone: state.timezone,
})
function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}

function Maps(props) { 
  const {latitude, longitude, currency, speed, distance, volume, timezone}= props; 
  console.log(latitude, longitude);
  let map ;
  // React.useEffect(()=>{
  //   if(map) {

  //     map.setView([latitude,longitude], 5);
  //   }
  // },[latitude,longitude]);
  const icon = new Icon({
    iconUrl: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
    iconSize: [35, 35]
  });
  return (
    <div className="map" >
     
    <MapContainer 
    ref={(ref) => { map = ref; console.log(map)}}
    center={[latitude, longitude]} zoom={5} scrollWheelZoom={true}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />      
        <Marker          
          position={[
            latitude,
            longitude
          ]}          
          icon={icon}
        >   
        <Popup>
          <Typography><span className="infoCard">Currency: </span>{currency}</Typography>
          <Typography><span className="infoCard">Unit of Speed: </span>{speed}</Typography>
          <Typography><span className="infoCard">Unit of Distance: </span>{distance}</Typography>
          <Typography><span className="infoCard">Unit of Volume: </span>{volume}</Typography>
          <Typography><span className="infoCard">Timezone info: </span>{timezone}</Typography>
        </Popup>
        </Marker>
        <ChangeMapView coords={[latitude, longitude]}/>
    </MapContainer>
    </div>
  );
}

export default connect(mapStateToProps)(Maps);